import {Fragment, useState} from 'react';
import {Linkedin, MailEnvelope, PhoneInCall, Typography} from 'tetraimpacts-components-library';

// Hooks
import {useTranslation} from 'next-i18next';

// Components
import Link from 'components/Link/Link';

// Interfaces
import IPersonCard from './PersonCard.interface';

// Styles
import {
  Avatar,
  ContactContainer,
  Divider,
  PersonCardContainer,
  PersonCardContent,
  PersonCardContentHeading,
  PersonCardImgContainer,
  TagButton,
} from './PersonCard.styles';

const contactOptions = [
  {icon: MailEnvelope, name: 'mail'},
  {icon: PhoneInCall, name: 'phone'},
  {icon: Linkedin, name: 'linkedin'},
  // TODO Import and enable once we have a GitHub icon in TICL
  // { icon: GitHub, name: 'github' },
];

export default function PersonCard({name, shortBio, avatar, contact, defaultAvatar}: IPersonCard) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const {t} = useTranslation();

  return (
    <PersonCardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <PersonCardContent>
        <PersonCardContentHeading>
          <PersonCardImgContainer>
            <Avatar
              width={isHovered ? 60 : 300}
              height={isHovered ? 60 : 300}
              style={{
                left: `${isHovered ? '20px' : '-4px'}`,
                top: `${isHovered ? '20px' : '-4px'}`,
                zIndex: 2,
              }}
              src={avatar?.url ?? defaultAvatar}
              alt={name}
              title={name}
              priority
            />
          </PersonCardImgContainer>
          <Typography
            fontWeight="700"
            colorPreset="primary"
            fontSize="20px"
            lineHeight="23px"
            lineNumbers={2}
          >
            {name}
          </Typography>
        </PersonCardContentHeading>
        {shortBio && (
          <Typography
            fontWeight="400"
            fontSize="12px"
            lineHeight="160%"
            lineNumbers={7}
            // style={{wordBreak: 'break-word', hyphens: 'auto'}}
          >
            {shortBio}
          </Typography>
        )}
      </PersonCardContent>
      <ContactContainer>
        {contact &&
          contact.map((item, idx) => {
            const icon = contactOptions.find(element => element.name === item.name);
            return (
              <Fragment key={item.name}>
                {idx === 2 && <Divider />}
                {item.url && (
                  <Link href={item.url}>
                    <TagButton
                      role="button"
                      aria-label={`${t('staff-contact-aria')}`}
                      afterIcon={icon?.icon}
                    />
                  </Link>
                )}
              </Fragment>
            );
          })}
      </ContactContainer>
    </PersonCardContainer>
  );
}
