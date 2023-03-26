import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Base = Template.bind({});
Base.args = {};
Base.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
  StoreDecorator({
    user: {},
  }),
];
