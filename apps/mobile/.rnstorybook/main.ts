import type { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['../../../packages/ui/src/**/*.native.stories.?(ts|tsx|js|jsx)'],
  deviceAddons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-backgrounds',
  ],
};

export default main;
