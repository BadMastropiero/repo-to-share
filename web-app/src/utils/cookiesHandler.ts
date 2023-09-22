const defaultExpires = new Date(Date.now() + 5 * 864e5).toUTCString();

// Sets cookie
export const setCookie = (
  name: string,
  value: string,
  expires: string = defaultExpires,
  path?: string
) => {
  let cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}`;
  if (path) cookie += `; path=${path}`;
  document.cookie = cookie;
};

// Gets cookie
export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
};

// Deletes cookie
export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; Max-Age=-99999999;`;
};

// Checks if cookie exists
export const checkCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return true;
  return false;
};

// Gets all cookies
export const getAllCookies = () => document.cookie;

// Deletes all cookies
export const deleteAllCookies = () => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
};
