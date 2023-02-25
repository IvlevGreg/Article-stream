import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from './Loader';
import 'app/styles/index.scss';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: 'text',
};
