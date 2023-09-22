import {getWelcomeNewsletter} from 'apiHandlers/getNewsletter';
import nodemailer from 'nodemailer';
import {pages} from 'config/pagesUrls';
import {axiosI} from './axiosI';

type User = {
  name: string;
  email: string;
  preferredLocale?: string;
};

export default async function sendSubscribedEmail(user: User, newsletterEndpoint: string) {
  if (!user.name || !user.email) throw new Error('Error: Missing required fields in user');

  try {
    const newsletter = await getWelcomeNewsletter(user.preferredLocale);
    if (!newsletter) throw new Error('Error: Welcome email not found');

    // Check we are not sending a welcome email instead of a newsletter since this is a regular bulk action
    const tags = newsletter.contentfulMetadata.tags.map(tag => tag.id);
    if (!tags.includes('welcomeEmail')) {
      throw new Error('Error: Failed retrieving the email data');
    }

    let renderedEmail = '';

    await axiosI()
      .get(newsletterEndpoint, {
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
      .catch(err => {
        throw new Error('Error: Failed retrieving the email template', err);
      });

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

    const emailReplaced = renderedEmail
      .replaceAll('VAR_USER_NAME', user.name)
      .replaceAll('VAR_EMAIL_RECEIVER_ADDRESS', user.email);

    // Sending the email request
    const res = await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: newsletter.title,
      html: emailReplaced,
      // cc: process.env.RECEIVER_EMAIL_CC,
    });

    return !!res;
  } catch (err) {
    // TODO: throw error here
    console.log('err', err);
    return false;
  }
}
