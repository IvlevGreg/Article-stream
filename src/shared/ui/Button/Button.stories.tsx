import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  theme: ThemeButton.CLEAR,
  children: 'text',
};

export const Outline = Template.bind({});
Outline.args = {
  theme: ThemeButton.OUTLINE,
  children: 'text',
};
