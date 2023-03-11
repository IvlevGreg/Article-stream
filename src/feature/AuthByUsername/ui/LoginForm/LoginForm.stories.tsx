import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'feature/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd' },
})];
export const withError = Template.bind({});
withError.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd', error: 'error' },
})];
export const loading = Template.bind({});
loading.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd', isLoading: true },
})];
