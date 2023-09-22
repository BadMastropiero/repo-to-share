/* eslint-disable @next/next/no-img-element */
import {Button, SocialButton, Typography} from 'tetraimpacts-components-library';
import {BLUE_LOGO_URL, EMAIL_FOOTER, HOST_DOMAIN} from 'config/constants';
import {getAbsoluteUrl} from 'utils/routes';

// Hooks
import {useTranslation} from 'next-i18next';

// Interfaces
import NewsletterProps from './Newsletter.interface';
import {NewsletterBody, StyledNewsletter} from './Newsletter.styles';

const typographyCenterStyle = {
  width: 'fit-content',
  margin: 'auto',
  marginTop: '20px',
  fontFamily: 'Roboto, sans-serif',
};

const typographyCenterStyleFooter = {
  width: 'fit-content',
  margin: 'auto',
  marginTop: '10px',
  fontFamily: 'Roboto, sans-serif',
};

export default function Newsletter({
  socialNetworks,
  headerBackground,
  headerMainImage,
  footerDecorationImage,
  bodyTitle,
  firstParagraphSection,
  headerCoverMessage,
  headerUserCover,
  secondParagraphSections,
  sentToEmail,
  unsubscribeText,
  appointmentButtonText,
  appointmentButtonLink,
  readMoreButtonText,
  readMoreLink,
  unsubscribeLink,
  viewInWebLink,
}: NewsletterProps) {
  const {t} = useTranslation();
  return (
    <StyledNewsletter
      style={{
        paddingTop: '20px',
        backgroundColor: '#f1f4f7',
      }}
    >
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '40px',
          width: '104px',
        }}
      >
        <img width={104} height={40} src={BLUE_LOGO_URL} alt="" />
      </div>
      <NewsletterBody
        style={{
          margin: 'auto',
          paddingBottom: '25px',
          marginTop: '20px',
          width: '100%',
          maxWidth: '696px',
          borderRadius: '10px 10px 0px 0px',
          backgroundColor: '#f8f9fb',
        }}
      >
        <div style={{}}>
          <div
            style={{
              margin: 'auto',
              // boxShadow: '0px 10px 30px -5px rgba(0, 101, 166, 0.4)',
              borderRadius: '10px',
              width: '100%',
              background: `url(${headerBackground})`,
              backgroundPosition: 'center',
              // backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
              padding: '40px 20px',
              backgroundSize: 'cover',
              // maxWidth: '696px',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                height: '238px',
                width: '304px',
                marginTop: '20px',
              }}
            >
              <img
                src={headerMainImage}
                alt=""
                style={{objectFit: 'contain'}}
                height={238}
                width={304}
              />
            </div>
            <Typography
              variant="h1"
              fontWeight="700"
              fontSize="36px"
              lineHeight="40px"
              textAlign="center"
              colorPreset="primary"
              style={{
                ...typographyCenterStyle,
                marginTop: '30px',
              }}
            >
              {headerUserCover}
            </Typography>
            <Typography
              variant="h2"
              fontWeight="600"
              fontSize="24px"
              lineHeight="40px"
              textAlign="center"
              colorPreset="primary"
              style={{
                ...typographyCenterStyle,
                marginBottom: '10px',
              }}
            >
              {headerCoverMessage}
            </Typography>
          </div>
        </div>

        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            // marginTop: '20px',
            maxWidth: '561px',
            padding: '0 10px',
          }}
        >
          <Typography
            variant="p"
            fontWeight="700"
            fontSize="32px"
            lineHeight="normal"
            textAlign="center"
            colorPreset="primary"
            style={typographyCenterStyle}
          >
            {bodyTitle}
          </Typography>
          <Typography
            colorPreset="primary"
            fontWeight="400"
            fontSize="16px"
            lineHeight="20.8px"
            style={typographyCenterStyle}
          >
            {firstParagraphSection}
          </Typography>

          {appointmentButtonText && (
            <Button
              textStyle={{
                fontFamily: 'Roboto, sans-serif',
                textTransform: 'uppercase',
              }}
              href={appointmentButtonLink}
              text={appointmentButtonText}
              primary
              style={{
                margin: '30px auto',
                cursor: 'pointer',
                width: 'fit-content',
              }}
              presetSize="small"
            />
          )}

          {secondParagraphSections && (
            <Typography
              colorPreset="primary"
              fontWeight="400"
              fontSize="16px"
              lineHeight="20.8px"
              style={typographyCenterStyle}
            >
              {secondParagraphSections}
            </Typography>
          )}

          {readMoreButtonText && (
            <Button
              textStyle={{
                fontFamily: 'Roboto, sans-serif',
                textTransform: 'uppercase',
              }}
              href={readMoreLink}
              text={readMoreButtonText}
              primary
              style={{
                margin: '30px auto',
                cursor: 'pointer',
                width: 'fit-content',
              }}
              presetSize="small"
            />
          )}

          <div
            style={{
              margin: '40px auto',
              height: '174px',
              width: '166px',
            }}
          >
            <img width={166} height={174} src={footerDecorationImage || ''} alt="" />
          </div>

          <table
            style={{margin: 'auto', width: 'max-content', maxWidth: '561px', marginTop: '20px'}}
          >
            <tbody>
              <tr>
                <td>
                  <SocialButton
                    href={socialNetworks.linkedin}
                    aria-label="linkedin"
                    style={{cursor: 'pointer'}}
                    iconComponent={
                      <img
                        src={getAbsoluteUrl('/icons/social/png/linkedInIcon_primary.png')}
                        height={50}
                        alt="LinkedIn"
                      />
                    }
                  />
                </td>
                <td>
                  <SocialButton
                    href={socialNetworks.instagram}
                    aria-label="instagram"
                    style={{cursor: 'pointer'}}
                    iconComponent={
                      <img
                        src={getAbsoluteUrl('/icons/social/png/instagramIcon_primary.png')}
                        height={50}
                        alt="Instagram"
                      />
                    }
                  />
                </td>
                <td>
                  <SocialButton
                    href={socialNetworks.facebook}
                    aria-label="facebook"
                    style={{cursor: 'pointer'}}
                    iconComponent={
                      <img
                        src={getAbsoluteUrl('/icons/social/png/facebookIcon_primary.png')}
                        height={50}
                        alt="Facebook"
                      />
                    }
                  />
                </td>
                <td>
                  <SocialButton
                    href={socialNetworks.twitter}
                    aria-label="twitter"
                    style={{cursor: 'pointer !important'}}
                    iconComponent={
                      <img
                        src={getAbsoluteUrl('/icons/social/png/twitterIcon_primary.png')}
                        height={50}
                        alt="Twitter"
                      />
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div
            style={{
              margin: 'auto',
            }}
          >
            <Typography
              fontWeight="500"
              fontSize="12px"
              lineHeight="14px"
              textAlign="center"
              colorPreset="primary"
              style={typographyCenterStyle}
            >
              {sentToEmail}
            </Typography>
            <a
              href={unsubscribeLink}
              style={{margin: '0px auto', cursor: 'pointer', width: 'fit-content'}}
            >
              <Typography
                fontWeight="500"
                fontSize="12px"
                lineHeight="14px"
                textAlign="center"
                colorPreset="primary"
                textDecorationLine="underline"
                textTransform="uppercase"
                style={typographyCenterStyleFooter}
                variant="p"
              >
                {unsubscribeText}
              </Typography>
            </a>
            <Typography
              fontWeight="500"
              fontSize="12px"
              lineHeight="14px"
              textAlign="center"
              style={typographyCenterStyleFooter}
            >
              {EMAIL_FOOTER}
            </Typography>
            <Typography
              fontWeight="500"
              fontSize="12px"
              lineHeight="14px"
              textAlign="center"
              style={typographyCenterStyleFooter}
            >
              {HOST_DOMAIN}
            </Typography>
            <a
              href={viewInWebLink}
              style={{margin: '0px auto', cursor: 'pointer', width: 'fit-content'}}
              target="_blank"
              rel="noreferrer"
            >
              <Typography
                fontWeight="500"
                fontSize="12px"
                lineHeight="14px"
                textAlign="center"
                colorPreset="primary"
                textDecorationLine="underline"
                textTransform="uppercase"
                style={typographyCenterStyleFooter}
                variant="p"
              >
                {t('anchor-text-view-in-browser')}
              </Typography>
            </a>
          </div>
        </div>
      </NewsletterBody>
    </StyledNewsletter>
  );
}
