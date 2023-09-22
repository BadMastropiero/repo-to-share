import {pages} from 'config/pagesUrls';

// Remove the initial # character from the colors' strings
const popHash = (color: string) => (color[0] === '#' ? color.slice(1) : color);

export function getCalendlyUrl(colors: any): string {
  let calendlyUrl: string = '';
  if (pages.CALENDLY)
    calendlyUrl = `${pages.CALENDLY}?background_color=${popHash(
      colors.primary25
    )}&text_color=${popHash(colors.primary)}&primary_color=${popHash(colors.support1)}`;
  return calendlyUrl;
}

export default getCalendlyUrl;
