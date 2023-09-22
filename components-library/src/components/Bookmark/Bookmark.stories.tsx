import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MailEnvelope, PhoneInCall, Share} from '../Icon';

import Bookmark from './Bookmark';

export default {
  title: 'Components/Bookmark',
  component: Bookmark,
  argTypes: {
    href: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Bookmark>;

export const Base: ComponentStory<typeof Bookmark> = args => {
  const {primary, text, href} = args;

  return (
    <Bookmark
      primary={primary}
      text={text}
      beforeIcon={Share}
      href={href}
      // afterIcon={ArrowLeft}
      // onClick={onClick}
    />
  );
};

Base.args = {
  primary: true,
  text: 'Bookmark text',
};

export const MailBookmark: ComponentStory<typeof Bookmark> = () => (
  <Bookmark
    primary
    text="info@tetraimpacts.com"
    beforeIcon={MailEnvelope}
    href="mailto: info@tetraimpacts.com"
  />
);

MailBookmark.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2555%3A7532&t=Yx1jzZZsTXIGvj6Z-4',
  },
};

export const PhoneBookmark: ComponentStory<typeof Bookmark> = () => (
  <Bookmark primary text="+ 505-7714-1105" beforeIcon={PhoneInCall} href="tel: + 505-7714-1105" />
);

PhoneBookmark.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2555%3A7538&t=Yx1jzZZsTXIGvj6Z-4',
  },
};

export const BookmarkWithAfterIcon: ComponentStory<typeof Bookmark> = () => (
  <Bookmark primary text="+ 505-7714-1105" afterIcon={PhoneInCall} />
);

export const BookmarkWithBothIcons: ComponentStory<typeof Bookmark> = () => (
  <Bookmark primary text="+ 505-7714-1105" afterIcon={PhoneInCall} beforeIcon={MailEnvelope} />
);
