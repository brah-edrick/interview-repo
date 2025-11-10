import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Button from './Button.vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Button },
    template: '<Button>Button</Button>',
  }),
};

export const Exact: Story = {
  render: () => ({
    components: { Button },
    template: '<Button>Let\'s Go!</Button>',
  }),
};


