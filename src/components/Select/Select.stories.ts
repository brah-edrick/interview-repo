import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Select from './Select.vue';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of options with displayName and value',
    },
    nativeSelect: {
      control: 'boolean',
      description: 'Use native select element or custom select with ARIA attributes',
    },
    name: {
      control: 'text',
      description: 'Name attribute for form submission',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    onSelect: {
      action: 'selected',
      description: 'Callback function called when an option is selected',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'select',
    options: [
      { displayName: 'Option 1', value: 'option1' },
      { displayName: 'Option 2', value: 'option2' },
      { displayName: 'Option 3', value: 'option3' },
    ],
    onSelect: (value: string) => {
      console.log(value);
    },
    nativeSelect: false,
  },
  render: (args) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: '<Select v-bind="args"></Select>',
  }),
};


export const NativeSelect: Story = {
  args: {
    name: 'native-select',
    options: [
      { displayName: 'Option 1', value: 'option1' },
      { displayName: 'Option 2', value: 'option2' },
      { displayName: 'Option 3', value: 'option3' },
    ],
    onSelect: (value: string) => {
      console.log(value);
    },
    nativeSelect: true,
  },
  render: (args) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: '<Select v-bind="args"></Select>',
  }),
};





