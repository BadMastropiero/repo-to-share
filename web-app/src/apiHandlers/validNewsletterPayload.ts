import {createHmac} from 'crypto';
import {NextApiRequest, NextApiResponse} from 'next';

type NewsletterRequestBody = {
  spaceId: string;
  environmentId: string;
  contentTypeId: string;
  entityId: string;
  revision: number;
};

/**
 * Check if the body of the request contains a valid payload from the Contentful webhook
 *
 * @warning  This function might modify the res object accordingly to the verification result
 * @param req
 * @param res
 * @returns `true` if payload is valid, otherwise `false`
 */
export function validNewsletterPayload(req: NextApiRequest, res: NextApiResponse) {
  // Calculate expected hash token
  const hashToken = createHmac('sha256', `${process.env.NEXT_PUBLIC_HOST}`).digest('hex');
  // Check tiwaAuthToken in headers
  const {tiwaauthtoken} = req.headers;
  if (!tiwaauthtoken || tiwaauthtoken !== hashToken) {
    res.status(401).json({error: 'Unauthorized'});
    return false;
  }

  const {spaceId, environmentId, contentTypeId, entityId, revision}: NewsletterRequestBody =
    req.body;

  if (!spaceId || !environmentId || !contentTypeId || !entityId || !revision) {
    res.status(400).json({error: 'Missing required fields'});
    return false;
  }

  if (spaceId !== `${process.env.CONTENTFUL_SPACE_ID}`) {
    res.status(406).json({error: 'Not acceptable', body: 'spaceID is not valid'});
    return false;
  }

  if (environmentId !== `${process.env.CONTENTFUL_SPACE_ENV_ID}`) {
    res.status(406).json({error: 'Not acceptable', body: 'environmentId is not valid'});
    return false;
  }

  if (contentTypeId !== 'newsletter') {
    res.status(406).json({error: 'Not acceptable', body: 'contentTypeId is not valid'});
    return false;
  }

  return true;
}

export default validNewsletterPayload;
