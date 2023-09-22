// Components
import PersonCard from 'components/PersonCard/PersonCard';

// Hooks
import {useTranslation} from 'next-i18next';

// Styles
import {
  PersonCardWrapper,
  StaffContainer,
  StaffTitle,
  StyledContainer,
} from './StaffSection.styles';

// Interfaces
import {IStaffMember} from './StaffSection.interface';

export default function StaffSection({staffMembers, defaultAvatar}: IStaffMember) {
  const {t} = useTranslation();
  return (
    <StyledContainer>
      <StaffContainer>
        <StaffTitle>{t('about-us-staff-title')}</StaffTitle>
        <PersonCardWrapper>
          {staffMembers.length !== 0 &&
            staffMembers.map(({name, contact, avatar, shortBio}) => (
              <PersonCard
                key={name}
                name={name}
                contact={contact}
                avatar={avatar}
                defaultAvatar={defaultAvatar}
                shortBio={shortBio}
              />
            ))}
        </PersonCardWrapper>
      </StaffContainer>
    </StyledContainer>
  );
}
