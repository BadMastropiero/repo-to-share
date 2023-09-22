import {updateBlogsMetrics} from 'apiHandlers/updateBlogsMetrics';
import {NextApiRequest, NextApiResponse} from 'next';
import {createHmac} from 'node:crypto';

type UpdateBlogsMetricsRequestBody = {
  spaceId: string;
  environmentId: string;
};

export default async function updateBlogsMetricsAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method Not Allowed'});
  }

  // Calculate expected hash token
  const hashToken = createHmac('sha256', `${process.env.NEXT_PUBLIC_HOST}`).digest('hex');

  // Check tiwaAuthToken in headers
  const {tiwaauthtoken} = req.headers;
  if (!tiwaauthtoken || tiwaauthtoken !== hashToken) {
    return res.status(401).json({error: 'Unauthorized'});
  }

  const {spaceId, environmentId}: UpdateBlogsMetricsRequestBody = req.body;

  if (!spaceId || !environmentId) {
    return res.status(400).json({error: 'Missing required fields'});
  }

  if (spaceId !== `${process.env.CONTENTFUL_SPACE_ID}`) {
    return res.status(406).json({error: 'Not acceptable', body: 'spaceID is not valid'});
  }

  if (environmentId !== `${process.env.CONTENTFUL_SPACE_ENV_ID}`) {
    return res.status(406).json({error: 'Not acceptable', body: 'environmentId is not valid'});
  }

  let result;
  try {
    result = await updateBlogsMetrics();
  } catch (err) {
    return res.status(500).json({error: 'Internal Server Error', message: err});
  }

  return res.status(200).json({message: 'Contentful Blogs data updated successfully', result});
}
