import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonSize, ThemeButton } from './Button';
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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  theme: ThemeButton.CLEAR_INVERTED,
  children: 'text',
};

export const Outline = Template.bind({});
Outline.args = {
  theme: ThemeButton.OUTLINE,
  children: 'text',
};
export const BACKGROUND = Template.bind({});
BACKGROUND.args = {
  theme: ThemeButton.BACKGROUND,
  children: 'text',
};

export const BACKGROUND_M = Template.bind({});
BACKGROUND_M.args = {
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.M,
  children: 'text M',
};

export const BACKGROUND_L = Template.bind({});
BACKGROUND_L.args = {
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.L,
  children: 'text L',
};

export const BACKGROUND_XL = Template.bind({});
BACKGROUND_XL.args = {
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.XL,
  children: 'text XL',
};

export const BACKGROUND_INVERTED = Template.bind({});
BACKGROUND_INVERTED.args = {
  theme: ThemeButton.BACKGROUND_INVERTED,
  children: 'text',
};
