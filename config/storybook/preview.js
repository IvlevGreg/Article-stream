import { addDecorator } from '@storybook/react';

import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

export const parameters = {

  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: Theme.LIGTH,
    list: [
      { name: Theme.LIGTH, class: Theme.LIGTH, color: '#fff' },
      { name: Theme.DARK, class: Theme.DARK, color: '#3b5998' },
    ],
  },
};

// const themesArray = Theme.

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);

// применил https://storybook.js.org/addons/@dhruvkb/storybook-addon-themes
// addDecorator(ThemeDecorator(Theme.DARK));
