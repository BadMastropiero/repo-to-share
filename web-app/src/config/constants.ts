// Default timeout to wait til register blog post view
// this value is probably been overriden in actual logic
export const TIMEOUT_TO_REGISTER_VIEW = 10000;
export const SUBSCRIPTION_OFFERED_DELAY = 7000;

export const HOST_DOMAIN = process.env.NEXT_PUBLIC_HOST;
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_PRODUCTION_DEPLOY = process.env.DEPLOY_TYPE === 'production';
export const OG_LOGO_URL = new URL('/logos/ti_logo_coloredbg_variant.png', HOST_DOMAIN).toString();
export const BLUE_LOGO_URL = new URL('/Logo.png', HOST_DOMAIN).toString();

const desiredEnabledModules = process.env.NEXT_PUBLIC_ENABLED_MODULES
  ? process.env.NEXT_PUBLIC_ENABLED_MODULES.split(',')
  : [];

// Dinamically disable blogs module
export const ENABLED_MODULES = {
  blogs: desiredEnabledModules.includes('blogs'),
  services: desiredEnabledModules.includes('services'),
  careers: desiredEnabledModules.includes('careers'),
  contactUs: desiredEnabledModules.includes('contactUs'),
  aboutUs: desiredEnabledModules.includes('aboutUs'),
  auth: desiredEnabledModules.includes('auth'),
  emailAuth: desiredEnabledModules.includes('emailAuth'),
  facebookAuth: desiredEnabledModules.includes('facebookAuth'),
  subscribe: desiredEnabledModules.includes('subscribe'),
  calendlyAsWidget: desiredEnabledModules.includes('calendlyAsWidget'),
};

export const areNoModulesEnabled = (() =>
  !Object.keys(ENABLED_MODULES).some(
    k =>
      // @ts-ignore
      ENABLED_MODULES[k]
  ))();

export const EMAIL_FOOTER = '© 2023 TETRAIMPACTS NICARAGUA S.A. 13138, MANAGUA, NICARAGUA.';
