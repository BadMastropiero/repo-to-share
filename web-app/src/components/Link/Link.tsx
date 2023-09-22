import React, {useState} from 'react';
import NextLink from 'next/link';
import {useRouter} from 'next/router';

// Components
import {Alert} from 'tetraimpacts-components-library';

// Hooks
import {useTranslation} from 'next-i18next';

// Interfaces
import {LinkProps} from './Link.interface';

/**
 * Link component with alert before leaving the page.
 * This is a wrapper for NextLink component.
 * The alert only works with string hrefs.
 *
 * @returns
 */
function Link({
  href,
  leaveAlertMessage = 'leave-page-alert-message',
  leaveAlertTitle = 'leave-page-alert-title',
  disabled = false,
  externLinksToNewTab = true,
  confirmModal = true,
  vibrate = true,
  ...rest
}: LinkProps) {
  const [open, setIsOpen] = useState(false);
  const router = useRouter();
  const {t} = useTranslation();

  const acceptLeave = () => {
    if (externLinksToNewTab && typeof href === 'string') {
      setIsOpen(false);
      window.open(href, '_blank');
      return;
    }

    setIsOpen(false);
    router.push(href);
  };

  const handleLinkClick = (e: MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    // Validate if the anchor href is an external link
    // Only working with string hrefs
    if (typeof href !== 'string') return;
    if (!href.startsWith('http')) return;

    // ... give haptic feedback
    if (vibrate && navigator?.vibrate) navigator.vibrate(10);

    if (new URL(href).origin === window.location.origin) return;

    // Open new tab without alert modal
    if (!confirmModal) {
      e.preventDefault();
      acceptLeave();
      return;
    }

    e.preventDefault();
    setIsOpen(true);
  };

  const rejectLeave = () => {
    setIsOpen(false);
  };

  if (disabled) return <span className="no-link" {...rest} />;
  return (
    <>
      <NextLink href={href} onClick={handleLinkClick} {...rest} />
      <Alert
        acceptText={t('button-accept-text') || ''}
        rejectText={t('button-reject-text') || ''}
        description={t(leaveAlertMessage) || ''}
        onAccept={acceptLeave}
        onReject={rejectLeave}
        setIsOpen={setIsOpen}
        isOpen={open}
        title={t(leaveAlertTitle) || ''}
      />
    </>
  );
}

export default Link;
