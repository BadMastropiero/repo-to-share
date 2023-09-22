import {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';
import Email from 'email-templates';
import {BLUE_LOGO_URL} from 'config/constants';
import path from 'path';

type EmailRequestBody = {
  name: string;
  email: string;
  message: string;
  objectives: string[];
  phone: string;
  hearFrom: string;
  project: string;
};

export default async function sendEmailAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method Not Allowed'});
  }

  const {name, email, message, objectives, phone, hearFrom, project}: EmailRequestBody = req.body;

  if (
    !name ||
    !email ||
    !objectives ||
    !Array.isArray(objectives) ||
    objectives.length === 0 ||
    !project
  ) {
    return res.status(400).json({error: 'Missing required fields'});
  }

  try {
    // create reusable transporter object using the default SMTP transport
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

    const templatesFolderPath = path.resolve('./public', 'emailTemplates');

    const emailInstance = new Email({
      views: {root: templatesFolderPath, options: {extension: 'ejs'}},
      message: {
        from: process.env.SENDER_EMAIL,
        // attachments: [
        //   {
        //     filename: "hello.txt",
        //     path: "./server/files/hello.txt",
        //     contentType: "text/plain",
        //   },
        //   {
        //     filename: "sample.txt",
        //     content: "sample attachement - content",
        //     contentType: "text/plain",
        //   },
        // ],
      },
      preview: false,
      send: true,
      transport: transporter,
      // transport: {
      // jsonTransport: true
      // }
    });

    // send mail with defined transport object
    // await transporter.sendMail({
    //   from: process.env.SENDER_EMAIL,
    //   to: process.env.RECEIVER_EMAIL,
    //   subject: `New message from ${name} (${email})`,
    //   text: message,
    // });

    await emailInstance.send({
      template: 'TIContact',
      message: {
        to: process.env.RECEIVER_EMAIL,
        cc: process.env.RECEIVER_EMAIL_CC,
        // attachments:
        // [{
        // filename:'individual.txt',
        // content:'Individual attachement',
        // contentType:'text/plain'
        // }]
      },
      locals: {
        fromName: name,
        fromEmail: email,
        logoUrl: BLUE_LOGO_URL,
        message: message || '',
        project: project || '',
        objectives: objectives || '',
        phone: phone || '',
        hearFrom: hearFrom || '',
      },
    });

    res.status(200).json({message: 'Email sent successfully'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: 'Internal Server Error'});
  }

  // res.status(500).json({error: 'Internal Server Error'});
  return undefined;
}
