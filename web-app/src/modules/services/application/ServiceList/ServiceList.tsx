import {Typography} from 'tetraimpacts-components-library';

// Components
import ServiceCard from 'components/ServiceCard/ServiceCard';

// Styles
import {
  HeadingContainer,
  ServiceContentWrapper,
  ServicesSummary,
  StyledServicesContainer,
} from './ServiceList.styles';

// Interfaces
import IServiceList from './ServiceList.interface';

export default function ServiceList({title, services, summary}: IServiceList) {
  return (
    <StyledServicesContainer>
      <HeadingContainer>
        {/* Page title */}
        <Typography
          fontFamily="Teko"
          fontWeight="500"
          fontSize="54px"
          lineHeight="77px"
          textTransform="capitalize"
          colorPreset="secondary"
        >
          {title || 'our services'}
        </Typography>
        {/* Page summary */}
        <ServicesSummary colorPreset="secondary">{summary}</ServicesSummary>
      </HeadingContainer>
      {/* Services */}
      <ServiceContentWrapper>
        {services &&
          services.map((service, idx) => (
            <ServiceCard
              id={service.sys.id}
              key={service.sys.id}
              width="464px"
              height="380px"
              imageAlt={service.cardImg.title}
              imageUrl={service.cardImg.url}
              body={service.shortDescription}
              title={service.title}
              slug={service.slug}
              showCategories
              categories={service.categoriesCollection.items}
              topDistance={idx !== 0 && idx % 2 !== 0}
              showGoToButton
              invertedFooterContent={idx <= 1}
              redirectable
              style={{justifyContent: 'flex-start'}}
            />
          ))}
      </ServiceContentWrapper>
    </StyledServicesContainer>
  );
}
