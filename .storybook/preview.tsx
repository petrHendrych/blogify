import type { Preview } from "@storybook/react";
import "../src/index.sass";
import "../src/locales/i18n.ts";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
