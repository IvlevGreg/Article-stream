import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import 'app/styles/index.scss';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'text',
};
