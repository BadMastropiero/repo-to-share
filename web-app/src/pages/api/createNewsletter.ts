import getNewsletterById from 'apiHandlers/getNewsletter';
import nodemailer from 'nodemailer';
import {pages} from 'config/pagesUrls';
import {NextApiRequest, NextApiResponse} from 'next';
import {axiosI} from 'apiHandlers/axiosI';
import {getSubscribedUsers} from 'firebaseApp/users/userData';
import {validNewsletterPayload} from 'apiHandlers/validNewsletterPayload';

export default async function createNewsletterAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method Not Allowed'});
  }

  // If the payload is not valid, we return the res modified by this checking function
  if (!validNewsletterPayload(req, res)) return res;

  const {entityId, revision} = req.body;

  if (revision > 1) {
    return res.status(406).json({
      error: 'The specified newsletter does not need to be sent.',
      body: 'This probably ocurred because the entry was updated and re-published',
    });
  }

  const userArray = await getSubscribedUsers();

  // Verify we have users to send the newsletter to
  if (!userArray.length) return res.status(406).json({error: 'No users found'});

  try {
    const {newsletter} = await getNewsletterById(entityId);
    if (!newsletter) return res.status(404).json({error: 'Newsletter not Found'});

    // Check we are not sending a welcome email instead of a newsletter since this is a regular bulk action
    const tags = newsletter.contentfulMetadata.tags.map(tag => tag.id);
    if (tags.includes('welcomeEmail')) {
      return res.status(406).json({
        error: 'Welcome email does not need to be sent. ',
        body:
          'This probably ocurred because either: ' +
          '1- The welcome email was published for the first time. ' +
          '2- The recently published newsletter was created from the welcome email template, carrying its tag. ',
      });
    }

    let renderedEmail = '';

    // Get the current domain
    // This is a nasty but required workaround
    const nextRequestMeta =
      // @ts-ignore
      req[Reflect.ownKeys(req).find(s => String(s) === 'Symbol(NextRequestMeta)')];
    // eslint-disable-next-line no-underscore-dangle
    const currentProtocol = nextRequestMeta._protocol;
    const currentDomain = `${currentProtocol}://${req.headers.host}`;

    await axiosI()
      .get(`${currentDomain}/newsletter`, {
        params: {
          coverHeader: newsletter.coverHeader,
          coverMessage: newsletter.coverMessage,
          headerTitle: newsletter.title,
          firstParagraphSection: newsletter.paragraphTop,
          secondParagraphSection: newsletter.paragraphBottom,
          appointmentButtonText: newsletter.buttonTop.label,
          appointmentButtonLink: newsletter.buttonTop.link || `${pages.CALENDLY}`,
          readMoreButtonText: newsletter.buttonBottom.label,
          readMoreLink: newsletter.buttonBottom.link,
          sentToEmail: 'Sent to: VAR_EMAIL_RECEIVER_ADDRESS',
          unsubscribeText: 'UNSUBSCRIBE',
          unsubscribeLink: 'https://tetraimpacts.com',
          coverBackgroundImgUrl: newsletter.coverBackgroundImg.url,
          coverImgUrl: `${newsletter.coverImg.url}?fm=png`,
          footerImgUrl: `${newsletter.footerImg.url}?fm=png`,
        },
      })
      .then(result => {
        renderedEmail = result.data;
      })
      .catch(err => res.status(500).json({error: 'Failed retrieving the email template', err}));

    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      // host: process.env.EMAIL_SERVICE_HOST,
      port: Number(process.env.EMAIL_SERVICE_PORT),
      secure: process.env.EMAIL_SERVICE_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVICE_USER,
        pass: process.env.EMAIL_SERVICE_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Define the email requests
    const emailRequests = userArray.map(user => {
      // Inject the name and email of the user in the email template
      const emailReplaced = renderedEmail
        .replaceAll('VAR_USER_NAME', user.name)
        .replaceAll('VAR_EMAIL_RECEIVER_ADDRESS', user.email);

      // Define transporter mail sender
      return transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: user.email,
        subject: newsletter.title,
        html: emailReplaced,
        // cc: process.env.RECEIVER_EMAIL_CC,
      });
    });

    // Sending all mails with the defined transport object
    const result = await Promise.allSettled(emailRequests).then(promisesResults => {
      const resultData: any[] = [];
      promisesResults.forEach(promiseResult => {
        // @ts-ignore
        resultData.push(promiseResult.value || 'rejected');
      });
      return resultData;
    });

    return res.status(200).json({message: 'Emails sent successfully', details: result});
  } catch (err) {
    return res.status(500).json({error: 'Internal Server Error', err});
  }

  return res.status(200).json({message: 'Emails sent successfully'});
}
