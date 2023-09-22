import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {GenericProps} from '../Generic/Generic';
import {Typography} from '../Typography';

import CarWrapped, {Card} from '.';
import {CardProps} from './Card.interface';
import {
  CardBack,
  CardContent,
  CardControls,
  CardFront,
  CardHeader,
} from './CardHelpers/CardHelpers.styles';

import {Icon, Share} from '../Icon';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<React.FC<typeof Card>>;

export const Base: ComponentStory<React.FC<GenericProps & CardProps>> = args => (
  <CarWrapped width="280px" height="380px" {...args}>
    <CardHeader>
      <Typography
        variant="h1"
        customPreset="serviceTitle"
        fontWeight="700"
        gradient="linear-gradient(45deg, #00EB87, #0066A6)"
        fontFamily="Roboto Flex"
      >
        Shape your ideas
      </Typography>
    </CardHeader>
    <CardContent>
      <Typography colorPreset="primary" preset="content">
        Consulting. Get the insights you need about your market and how to build your business with
        analysis and technology awareness.
      </Typography>
    </CardContent>
  </CarWrapped>
);

export const Service: ComponentStory<React.FC<GenericProps & CardProps>> = () => (
  <CarWrapped width="280px" height="380px" variant="service">
    <CardHeader>
      <Typography
        variant="h1"
        customPreset="serviceTitle"
        fontWeight="700"
        gradient="linear-gradient(45deg, #00EB87, #0066A6)"
        fontFamily="Roboto Flex"
      >
        Shape your ideas
      </Typography>
    </CardHeader>
    <CardContent>
      <Typography colorPreset="primary" preset="content">
        Consulting. Get the insights you need about your market and how to build your business with
        analysis and technology awareness.
      </Typography>
    </CardContent>
    <CardControls>
      <div style={{display: 'flex', width: '100%', alignItems: 'center', gap: '5px'}}>
        <Icon icon={Share} primary disabled height="16px" width="16px" />
        <Typography
          colorPreset="disable"
          fontSize="12px"
          lineHeight="24px"
          preset="content"
          aria-label="likes"
        >
          9999,9999
        </Typography>
      </div>
    </CardControls>
  </CarWrapped>
);

export const Service2: ComponentStory<
  React.FC<GenericProps & CardProps & {titleText?: string}>
> = ({titleText}) => (
  <CarWrapped
    width="900px"
    height="380px"
    variant="service"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <CardHeader>
      <Typography
        variant="h1"
        // customPreset="serviceTitle"
        preset="title"
        fontWeight="500"
        colorPreset="primary"
      >
        {titleText || 'Shape your ideas'}
      </Typography>
    </CardHeader>
    <CardContent>
      <Typography
        colorPreset="disable"
        preset="content"
        style={{maxWidth: '500px', textAlign: 'center'}}
      >
        Consulting. Get the insights you need about your market and how to build your business with
        analysis and technology awareness.
      </Typography>
    </CardContent>
  </CarWrapped>
);

export const Blog: ComponentStory<React.FC<GenericProps & CardProps>> = args => (
  <CarWrapped variant="blog" style={{width: '380px'}} {...args}>
    <CardContent style={{height: '173px'}}>
      <img src="assets/blogImage.svg" alt="Example Blog Card SVG" />
    </CardContent>
    <CardControls>
      <div style={{display: 'flex', width: '100%', alignItems: 'center', gap: '5px'}}>
        <Icon icon={Share} primary disabled height="16px" width="16px" />
        <Typography
          colorPreset="disable"
          fontSize="12px"
          lineHeight="24px"
          preset="content"
          aria-label="likes"
        >
          9999,9999
        </Typography>
      </div>
    </CardControls>
    <CardHeader>
      <Typography
        variant="h3"
        customPreset="serviceTitle"
        fontWeight="700"
        fontFamily="Roboto Flex"
        colorPreset="primary"
        fontSize="20px"
        lineHeight="23.44px"
        lineNumbers={2}
      >
        How Tetraimpacts helps you shape yourself Your business How Tetraimpacts helps you shape
        yourself Your business
      </Typography>
    </CardHeader>
  </CarWrapped>
);

export const Flip: ComponentStory<React.FC<GenericProps & CardProps>> = () => (
  <CarWrapped width="280px" height="380px" variant="service" animateCardFlip="flip">
    <CardFront>
      <CardHeader>
        <Typography
          variant="h1"
          customPreset="serviceTitle"
          fontWeight="700"
          colorPreset="primary"
          fontFamily="Roboto Flex"
          aria-checked="mixed"
          fontSize="30px"
          lineHeight="35.16px"
        >
          Shape your ideas
        </Typography>
      </CardHeader>
      <CardContent>
        <img src="assets/creativeThinking.svg" alt="Example Blog Card SVG" />
      </CardContent>
    </CardFront>
    <CardBack>
      <CardHeader>
        <Typography
          variant="h1"
          customPreset="serviceTitle"
          fontWeight="700"
          gradient="linear-gradient(45deg, #00EB87, #0066A6)"
          fontFamily="Roboto Flex"
        >
          Shape your ideas
        </Typography>
      </CardHeader>
      <CardContent>
        <Typography colorPreset="primary" preset="content" fontSize="16px">
          Consulting. Get the insights you need about your market and how to build your business
          with analysis and technology awareness.
        </Typography>
      </CardContent>
    </CardBack>
  </CarWrapped>
);

Base.args = {
  disabled: false,
  variant: 'service',
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A2797',
  },
};

Service.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A2797',
  },
};

Blog.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=146%3A13183',
  },
};
