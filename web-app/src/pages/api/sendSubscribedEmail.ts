import {NextApiRequest, NextApiResponse} from 'next';
import sendSubscribedEmail from 'apiHandlers/sendSubscribedEmail';
import {IS_PRODUCTION_DEPLOY} from 'config/constants';

type EmailRequestBody = {
  name: string;
  email: string;
};

export default async function sendSubscribedEmailAPI(req: NextApiRequest, res: NextApiResponse) {
  if (IS_PRODUCTION_DEPLOY && req.headers.origin !== process.env.NEXT_PUBLIC_HOST) {
    return res.status(401).json({message: 'Unauthorized'});
  }

  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method Not Allowed'});
  }

  const {name, email}: EmailRequestBody = req.body;

  if (!name || !email) {
    return res.status(400).json({error: 'Missing required fields'});
  }

  try {
    // Get the current domain
    // This is a nasty but required workaround
    const nextRequestMeta =
      // @ts-ignore
      req[Reflect.ownKeys(req).find(s => String(s) === 'Symbol(NextRequestMeta)')];
    // eslint-disable-next-line no-underscore-dangle
    const currentProtocol = nextRequestMeta._protocol;
    const currentDomain = `${currentProtocol}://${req.headers.host}`;

    const success = await sendSubscribedEmail(
      {
        email,
        name,
      },
      `${currentDomain}/newsletter`
    );

    if (success) res.status(200).json({message: 'Email sent successfully'});
    else res.status(500).json({message: 'Internal Server Error'});
  } catch (error) {
    return res.status(500).json({error: 'Internal Server Error'});
  }

  return undefined;
}
