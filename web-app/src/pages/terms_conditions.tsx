import React, {ReactElement} from 'react';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

// Config
import {defaultLanguage} from 'config/language';

// Layout
import BaseLayout from 'layouts/BaseLayout';

// Hooks
import {useTranslation} from 'next-i18next';

// Interfaces
import ITermsAndPolicies from 'modules/termsAndPolicies/application/TermsAndPolicies.interface';

// Styles
import {StyledTermsAndConditionsGlobalStyle} from 'modules/termsAndPolicies/application/TermsAndPolicies.styles';

// Data handlers
import getStaticTermsAndConditions from 'modules/termsAndPolicies/infrastructure/contentful/getStaticLegalContent';

// Components
import TermsAndPolicies from 'modules/termsAndPolicies/application/TermsAndPolicies';
import MetaInfo from 'components/MetaInfo/MetaInfo';

export default function TermsAndConditionsPage({body, title}: ITermsAndPolicies) {
  const {t} = useTranslation();

  return (
    <div className="main-content navbar-distance">
      <MetaInfo
        title={`${t('terms-page-title')} | ${t('app-meta-title')}`}
        description={t('terms-conditions-meta-description')}
      />
      <StyledTermsAndConditionsGlobalStyle />
      <div className="app-container">
        <TermsAndPolicies
          body={body}
          title={title}
          contentFooterImg="/illustrations/legalSectionPlant.svg"
        />
      </div>
    </div>
  );
}

TermsAndConditionsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  // Fetch static Terms and Conditions section from GQL
  const {staticLegalContent} = await getStaticTermsAndConditions('terms-conditions', locale);
  const {
    content: {body},
    title,
  } = staticLegalContent[0];

  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
      body,
      title,
    },
  };
};
