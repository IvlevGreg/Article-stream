import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { withError } from 'feature/AuthByUsername/ui/LoginForm/LoginForm.stories';
import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Base = Template.bind({});
Base.args = {};
Base.decorators = [StoreDecorator({

})];
export const authUser = Template.bind({});
authUser.args = {};
authUser.decorators = [StoreDecorator({
  user: { authData: {} },
})];
