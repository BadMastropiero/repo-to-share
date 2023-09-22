import {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import {
  ArrowDown,
  Facebook,
  Icon,
  Instagram,
  Linkedin,
  Twitter,
} from 'tetraimpacts-components-library';

// Hooks
import useProvideAuth from 'firebaseApp/hooks/useAuth';
import {useTranslation} from 'next-i18next';
import useOnClickOutside from 'hooks/clickOutside';

// Config
import {pages} from 'config/pagesUrls';

// Components
import Avatar from 'components/Avatar/Avatar';
import Drawer from './Drawer/Drawer';
import LoginModal from './LoginModal';
import LoginCard from './LoginCard';
import SignUpModal from './SignUpModal';

// Styles
import {AccountOptionsModal, DownArrowContainer, LoginModalLayout} from './UserAuthControl.styles';

// Interfaces
import UserAuthControlProps from './UserAuthControl.interface';

const socialNetworks = [
  {name: 'linkedin', link: pages.LINKEDIN, icon: Linkedin},
  {name: 'instagram', link: pages.INSTAGRAM, icon: Instagram},
  {name: 'facebook', link: pages.FACEBOOK, icon: Facebook},
  {name: 'twitter', link: pages.TWITTER, icon: Twitter},
];

function UserAuthControl({
  isMobileMScreen,
  isDrawerVisible,
  primary,
  defaultAvatarBgFilter,
}: UserAuthControlProps) {
  const {t} = useTranslation();
  const {user, signOut} = useProvideAuth();

  const ref = useRef<any>();
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalSignUpIsOpen, setModalSignUpIsOpen] = useState(false);
  const [modalAccountOptionsIsOpen, setModalAccountOptionsIsOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  useOnClickOutside(ref, () => setModalAccountOptionsIsOpen(false));

  useEffect(() => {
    if (user) {
      setModalLoginIsOpen(false);
    }
  }, [user]);

  const handleAvatarClick = () => {
    if (isMobileMScreen) return;
    setShowDrawer(true);
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        gap: '10px',
      }}
    >
      {user ? (
        <Image
          title={user?.displayName || t('user-photo') || ''}
          width={31}
          height={31}
          src={user?.photoURL || ''}
          alt={t('user-photo')}
          style={{
            borderRadius: '50%',
          }}
          onClick={handleAvatarClick}
        />
      ) : (
        <Avatar
          width="31px"
          height="31px"
          onClick={handleAvatarClick}
          primary={primary}
          backgroundFilter={defaultAvatarBgFilter}
        />
      )}
      {isMobileMScreen && (
        <DownArrowContainer
          role="button"
          aria-label={`${t('show-account-options')}`}
          onClick={() => {
            if (isMobileMScreen) return setModalAccountOptionsIsOpen(true);
            return setShowDrawer(true);
          }}
          isPrimary={primary}
        >
          <Icon icon={ArrowDown} primary={primary} />
        </DownArrowContainer>
      )}
      {modalAccountOptionsIsOpen && isMobileMScreen ? (
        <AccountOptionsModal
          style={{
            position: 'absolute',
          }}
          ref={ref}
        >
          <LoginCard
            user={user}
            onLogin={() => {
              setModalLoginIsOpen(true);
              setModalAccountOptionsIsOpen(false);
            }}
            onSignUp={() => {
              setModalSignUpIsOpen(true);
              setModalAccountOptionsIsOpen(false);
            }}
            onLogout={() => {
              signOut();
              setModalAccountOptionsIsOpen(false);
            }}
          />
        </AccountOptionsModal>
      ) : (
        <LoginModalLayout
          isOpen={modalAccountOptionsIsOpen}
          setIsOpen={setModalAccountOptionsIsOpen}
          closeOnBackdropClick
        >
          <LoginCard
            user={user}
            onLogin={() => {
              setModalLoginIsOpen(true);
              setModalAccountOptionsIsOpen(false);
            }}
            onSignUp={() => {
              setModalSignUpIsOpen(true);
              setModalAccountOptionsIsOpen(false);
            }}
            onLogout={() => {
              signOut();
              setModalAccountOptionsIsOpen(false);
            }}
          />
        </LoginModalLayout>
      )}
      <LoginModal isOpen={modalLoginIsOpen} setIsOpen={setModalLoginIsOpen} />
      <SignUpModal isOpen={modalSignUpIsOpen} setIsOpen={setModalSignUpIsOpen} />
      {!isMobileMScreen && (
        <Drawer
          user={user}
          primary
          visible={isDrawerVisible}
          setModalOpen={setModalAccountOptionsIsOpen}
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
          phoneNumber="+ 505 - 7714 - 1105"
          email="info@tetraimpacts.com"
          socialNetworks={socialNetworks}
        />
      )}
    </div>
  );
}

export default UserAuthControl;
