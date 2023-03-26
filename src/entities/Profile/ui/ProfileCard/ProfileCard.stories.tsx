import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatarImg from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 98,
    country: Country.Belarus,
    lastname: 'Ivan',
    first: 'Ivanov',
    city: 'Minsk',
    currency: Currency.RUB,
    avatar: avatarImg,
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'test',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
