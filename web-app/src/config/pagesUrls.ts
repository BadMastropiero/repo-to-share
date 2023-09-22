export const pages = {
  TERMS_CONDITIONS: '/terms_conditions',
  LANDING: '/',
  PRIVACY_POLICY: '/policy',
  LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN || '',
  FACEBOOK: process.env.NEXT_PUBLIC_FACEBOOK || '',
  TWITTER: process.env.NEXT_PUBLIC_TWITTER || '',
  INSTAGRAM: process.env.NEXT_PUBLIC_INSTAGRAM || '',
  ABOUT_US: '/about_us',
  BLOGS: '/blogs',
  CONTACT_US: '/contact_us',
  SERVICES: '/services',
  CALENDLY: process.env.NEXT_PUBLIC_CALENDLY || '',
  CAREERS: '/careers',
};

export const landingSections = {
  HERO: 'hero',
  ABOUT_US: 'about_us',
  BLOGS: 'blogs',
  CONTACT_US: 'contact_us',
  SERVICES: 'services',
  CAREERS: 'careers',
};

export const serviceSections = {
  CONTACT_US: 'service_contact_us',
};

export const aboutSections = {
  STAFF_MEMBERS: 'about_staff_members',
};

export const careersSections = {
  JOBS_OFFERS: 'job_offers_section',
};

/**
 * Due to next not fully rendering page to html in some cases during development,
 * endpoints with that requirement should be added to this list
 * This is a workaround mostly for prerendering emails, and it is done in `_document.tsx`
 */
export const pagesWithoutReact = ['/newsletter'];

export const apiUrls = {
  CACHED_BLOGS: '/api/cachedBlogs',
  RELATED_BLOGS: '/api/relatedBlogs',
};

export default pages;
