import {HOST_DOMAIN} from 'config/constants';

export function getAbsoluteUrl(url: string) {
  const res = new URL(url, HOST_DOMAIN);
  return res.toString();
}

export default getAbsoluteUrl;
