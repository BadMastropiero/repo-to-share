import {ComponentMeta, ComponentStory} from '@storybook/react';
import Icon from '../Icon';

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Blog,
  CheckMark,
  Close,
  Communication,
  Error,
  Facebook,
  Favorite,
  Forum,
  Graph,
  Home,
  Info,
  Instagram,
  Linkedin,
  MailEnvelope,
  MailSend,
  Person,
  People,
  PhoneInCall,
  Search,
  Send,
  Share,
  Style,
  SwitchAccount,
  Task,
  Tetraimpacts,
  Timer,
  Translate,
  Twitter,
  ViewCarrousel,
  Visibility,
  Warning,
} from '..';

export default {
  title: 'Icons/All',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Base: ComponentStory<typeof Icon> = args => {
  const {primary, disabled, height, width, color, sizePreset} = args;

  const AllIconsArray = [
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Blog,
    CheckMark,
    Close,
    Communication,
    Error,
    Facebook,
    Favorite,
    Forum,
    Graph,
    Home,
    Info,
    Instagram,
    Linkedin,
    MailEnvelope,
    MailSend,
    Person,
    People,
    PhoneInCall,
    Search,
    Send,
    Share,
    Style,
    SwitchAccount,
    Task,
    Tetraimpacts,
    Timer,
    Translate,
    Twitter,
    ViewCarrousel,
    Visibility,
    Warning,
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {AllIconsArray.map(item => (
        <Icon
          key={Math.random() * AllIconsArray.length}
          primary={primary}
          customColor={color}
          disabled={disabled}
          height={height}
          width={width}
          sizePreset={sizePreset}
          icon={item}
        />
      ))}
    </div>
  );
};

Base.args = {
  primary: true,
  disabled: false,
  height: undefined,
  width: undefined,
  color: undefined,
  sizePreset: undefined,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7719&t=dCia0ciBvwS3cJuQ-4',
  },
};
