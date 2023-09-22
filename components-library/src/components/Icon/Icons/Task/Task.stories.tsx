import {ComponentMeta, ComponentStory} from '@storybook/react';
import Task from './Task';

export default {
  title: 'Icons/Task',
  component: Task,
} as ComponentMeta<typeof Task>;

export const Base: ComponentStory<typeof Task> = args => {
  const {primary, disabled, height, width, ...rest} = args;

  return <Task primary={primary} disabled={disabled} height={height} width={width} {...rest} />;
};

Base.args = {
  primary: true,
  disabled: false,
  height: '24px',
  width: '24px',
  color: undefined,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2586%3A33634&t=BIshAsTq0IpyTmy6-4',
  },
};
