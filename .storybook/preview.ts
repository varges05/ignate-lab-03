import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

import "../src/app/globals.css";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    },
  },
 
};

