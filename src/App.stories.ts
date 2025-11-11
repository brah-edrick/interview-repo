import type { Meta, StoryObj } from '@storybook/vue3-vite';

import App from './App.vue';

const meta = {
  title: 'Pages/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { App },
    template: '<App />',
  }),
};

