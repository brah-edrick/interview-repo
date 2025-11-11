import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Button from './Button.vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'Content rendered inside the default slot',
    },
    onClick: {
      action: 'clicked',
      description: 'Handler called when the button is clicked',
    },
  },
  args: {
    default: 'Button',
    type: 'button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      const { default: slotContent, ...rest } = args;
      return { args: rest, slotContent };
    },
    template: '<Button v-bind="args">{{ slotContent }}</Button>',
  }),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    default: 'Disabled Button',
    name: 'named-button'
  },
};

export const Submit: Story = {
  args: {
    type: 'submit',
    default: 'Submit',
    name: 'named-button'
  },
};

export const WithOnClick: Story = {
  args: {
    default: 'Click Me',
    name: 'named-button'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      const logClick = () => {
        console.log('Button clicked from story');
      };
      const { default: slotContent, ...rest } = args;
      return { args: rest, slotContent, logClick };
    },
    template: '<Button v-bind="args" @click="logClick">{{ slotContent }}</Button>',
  }),
};
