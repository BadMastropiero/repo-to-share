// middleware.ts
import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {ENABLED_MODULES} from 'config/constants';
import {pages} from './config/pagesUrls';

// const isProduction = process.env.DEPLOY_TYPE === 'production';

function mapAvailableModulesToDisabledUrls() {
  const disabledUrls: string[] = [];
  if (!ENABLED_MODULES.blogs) {
    disabledUrls.push(pages.BLOGS);
  }
  if (!ENABLED_MODULES.services) {
    disabledUrls.push(pages.SERVICES);
  }
  if (!ENABLED_MODULES.contactUs) {
    disabledUrls.push(pages.CONTACT_US);
  }
  if (!ENABLED_MODULES.aboutUs) {
    disabledUrls.push(pages.ABOUT_US);
  }
  if (
    !ENABLED_MODULES.blogs &&
    !ENABLED_MODULES.services &&
    !ENABLED_MODULES.contactUs &&
    !ENABLED_MODULES.aboutUs
  ) {
    disabledUrls.push(pages.LANDING);
  }
  return disabledUrls;
}

// const disabledUrls: string[] = ['/services'];
const disabledUrls: string[] = mapAvailableModulesToDisabledUrls();

function isUrlDisabled(url: string) {
  return disabledUrls.some(disabledUrl => {
    if (url.startsWith(disabledUrl)) {
      return true;
    }
    return false;
  });
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (isUrlDisabled(url.pathname)) {
    url.pathname = '/wip';
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/terms_conditions',
    '/policy',
    '/about_us',
    '/blogs',
    '/contact_us',
    '/services',
    '/services/:service*',
    '/blogs/:blog*',
  ],
};
