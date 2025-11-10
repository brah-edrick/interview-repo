import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Card from './Card.vue';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    alignX: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Horizontal alignment',
    },
    alignY: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Vertical alignment',
    },
    paddingTop: {
      control: 'text',
      description: 'Override top padding',
    },
    paddingRight: {
      control: 'text',
      description: 'Override right padding',
    },
    paddingBottom: {
      control: 'text',
      description: 'Override bottom padding',
    },
    paddingLeft: {
      control: 'text',
      description: 'Override left padding',
    },
    minHeight: {
      control: 'text',
      description: 'Minimum height',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">Default Card</Card>',
  }),
};

export const Centered: Story = {
  args: {
    alignX: 'center',
    alignY: 'center',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">Centered Content</Card>',
  }),
};

export const CustomPadding: Story = {
  args: {
    paddingTop: '40px',
    paddingRight: '40px',
    paddingBottom: '40px',
    paddingLeft: '40px',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">Custom Padding</Card>',
  }),
};

export const MinHeight: Story = {
  args: {
    minHeight: '200px',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">Min Height</Card>',
  }),
};

export const CenteredWithPadding: Story = {
  args: {
    alignX: 'center',
    alignY: 'center',
    paddingTop: '40px',
    paddingBottom: '40px',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">Centered with Vertical Padding</Card>',
  }),
};

export const CenteredWithMinHeight: Story = {
  args: {
    alignX: 'center',
    alignY: 'center',
    minHeight: '200px',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">Centered with Min Height</Card>',
  }),
};





