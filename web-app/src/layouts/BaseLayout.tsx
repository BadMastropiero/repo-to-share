import {ReactNode} from 'react';
import {useRouter} from 'next/router';

// Constants
import {ENABLED_MODULES} from 'config/constants';

// Components
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import {Notification} from 'tetraimpacts-components-library';
import {ModalHandler} from 'components/TIModals/ModalHandler';
import {landingSections, pages} from '../config/pagesUrls';
import ProgressBar from '../components/ProgressBar/ProgressBar';

export default function BaseLayout({
  children,
  navbarPrimary = true,
  navbarBgStyle,
}: {
  children: ReactNode;
  navbarPrimary?: boolean;
  navbarBgStyle?: 'transparent';
}) {
  const router = useRouter();
  const isInlanding = router.pathname === pages.LANDING;

  return (
    <>
      <ProgressBar />
      {ENABLED_MODULES.subscribe && <ModalHandler />}
      <Navbar
        primary={navbarPrimary}
        backgroundStyle={navbarBgStyle}
        aboutUsUrl={isInlanding ? `/#${landingSections.ABOUT_US}` : pages.ABOUT_US}
        blogsUrl={isInlanding ? `/#${landingSections.BLOGS}` : pages.BLOGS}
        careersUrl={isInlanding ? `/#${landingSections.CAREERS}` : pages.CAREERS}
        contactUsUrl={
          isInlanding ? `/#${landingSections.CONTACT_US}` : `/#${landingSections.CONTACT_US}`
        }
        homeUrl="/#"
        servicesUrl={isInlanding ? `/#${landingSections.SERVICES}` : pages.SERVICES}
        activeUrl={useRouter().pathname}
      />
      <main className="flex-1">{children}</main>
      <Footer
        phoneNumber="+ 505 - 7714 - 1105"
        email="info@tetraimpacts.com"
        facebookUrl={pages.FACEBOOK}
        instagramUrl={pages.INSTAGRAM}
        linkedInUrl={pages.LINKEDIN}
        privacyPolicyUrl={pages.PRIVACY_POLICY}
        termsConditionsUrl={pages.TERMS_CONDITIONS}
        twitterUrl={pages.TWITTER}
      />
      <div style={{zIndex: 1000}}>
        <Notification position="bottom-left" />
      </div>
    </>
  );
}
