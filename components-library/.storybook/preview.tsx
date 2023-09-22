import {ThemeProvider} from 'styled-components';
import {styledDefaultTheme} from '../src/styles/index';

// Carousel related
import '@brainhubeu/react-carousel/lib/style.css';

// The types here are just a workaround, could not find the correct ones
const withThemeProvider = (Story: React.FC, context: Record<string, unknown>) => (
  <ThemeProvider theme={styledDefaultTheme}>
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
