import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {GenericProps} from '../Generic/Generic';
import {Carousel} from '.';
import {CarouselProps} from './Carousel.interface';

import {Blog, Service2} from '../Card/Card.stories';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as ComponentMeta<React.FC<typeof Carousel>>;

export const Base: ComponentStory<React.FC<GenericProps & CarouselProps>> = args => (
  <Carousel {...args}>
    <Service2 titleText="Shape your project" />
    <Service2 />
    <Service2 titleText="Shape your skills" />
    <Service2 titleText="Shape your body" />
    <Service2 titleText="Shape your self" />
  </Carousel>
);

export const Blogs: ComponentStory<React.FC<GenericProps & CarouselProps>> = () => (
  <Carousel variant="blogs" slidesWidth={380} showControls showPagination>
    <Blog />
    <Blog />
    <Blog />
    <Blog />
    <Blog />
    <Blog />
    <Blog />
  </Carousel>
);

export const Services: ComponentStory<React.FC<GenericProps & CarouselProps>> = () => (
  <Carousel variant="services" showPagination infinite autoplayDelay={3000}>
    <Service2 titleText="Shape your project" />
    <Service2 />
    <Service2 titleText="Shape your skills" />
    <Service2 titleText="Shape your self" />
  </Carousel>
);

Base.args = {
  disabled: false,
  variant: 'services',
};

Services.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=1119%3A4051',
  },
};

Blogs.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=1030%3A3827',
  },
};
