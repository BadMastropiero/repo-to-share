import {useContext, useState} from 'react';
import Script from 'next/script';
import Head from 'next/head';

// Components
import {Button, devices, useMediaQuery} from 'tetraimpacts-components-library';
import Link from 'components/Link/Link';

// Hooks
import {useTranslation} from 'next-i18next';

// Styles
import {ThemeContext} from 'styled-components';

// Config
import {ENABLED_MODULES} from 'config/constants';
import {getCalendlyUrl} from 'utils/calendly';
import {InlineWidgetContainer} from 'modules/services/application/ServiceDetail/Service.styles';

/*
 * Extending window type to add Calendly property
 * This will not redefine the window object nor will create another variable
 * named window. It means window is defined somewhere else and we're just
 * referencing it in the current scope, setting an extra property, Calendly,
 * so TypeScript won’t complain.
 */
declare global {
  interface Window {
    Calendly: any;
  }
}

export default function CalendlyButton() {
  const {t} = useTranslation();
  const {colors} = useContext(ThemeContext);
  const [isLaptopScreen] = useMediaQuery(devices.laptop);

  // We keep in the env the base url and pass the color options using our theme's colors
  const calendlyUrl = getCalendlyUrl(colors);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [inlineInitialized, setInlineInitialized] = useState(false);
  const [inlineVisible, setInlineVisible] = useState(false);

  if (!calendlyUrl) return null;

  return (
    <div className="flex-center" style={{marginTop: '5px', flexDirection: 'column'}}>
      {ENABLED_MODULES.calendlyAsWidget && (
        <>
          <Head>
            <link
              href="https://calendly.com/assets/external/widget.css"
              rel="stylesheet"
              key="calendly-modal-widget-styles"
            />
          </Head>
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            async
            key="calendly-inline-widget-script"
            strategy="lazyOnload"
            onReady={() => {
              setCalendlyLoaded(true);
            }}
          />
        </>
      )}
      {!ENABLED_MODULES.calendlyAsWidget && (
        <Link href={calendlyUrl}>
          <Button
            text={t('appointment-button-book') || ''}
            primary
            presetSize="large"
            style={{cursor: 'pointer'}}
          />
        </Link>
      )}
      {ENABLED_MODULES.calendlyAsWidget && calendlyLoaded && (
        <Button
          text={t('appointment-button-book') || ''}
          primary
          presetSize="large"
          onClick={() => {
            if (window.Calendly) {
              if (isLaptopScreen) {
                window.Calendly.initPopupWidget({
                  url: `${calendlyUrl}`,
                });
              } else if (!inlineInitialized) {
                setInlineVisible(true);
                window.Calendly.initInlineWidget({
                  url: `${calendlyUrl}`,
                  parentElement: document.getElementById('calendly-inline-widget'),
                });
                setInlineInitialized(true);
              } else {
                setInlineVisible(!inlineVisible);
              }
            }
          }}
        />
      )}
      <InlineWidgetContainer
        id="calendly-inline-widget"
        data-auto-load="false"
        style={{display: !isLaptopScreen && inlineVisible ? 'flex' : 'none'}}
        /*
         * We cant use conditional rendering here since we need an HTML
         * element with the `calendly-inline-widget` id in the DOM,
         * otherwise Calendly widget gets improperly attached to the DOM
         * and it's wrongly displayed, so we use the style attribute to hide it
         */
      />
    </div>
  );
}
