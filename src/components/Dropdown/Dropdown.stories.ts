import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Dropdown from './Dropdown.vue';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of options with displayName and value',
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
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { displayName: 'Option 1', value: 'option1' },
      { displayName: 'Option 2', value: 'option2' },
      { displayName: 'Option 3', value: 'option3' },
    ],
    onSelect: (value: string) => {
      console.log(value);
    },
  },
  render: (args) => ({
    components: { Dropdown },
    setup() {
      return { args };
    },
    template: '<Dropdown v-bind="args"></Dropdown>',
  }),
};

export const ManyOptions: Story = {
  args: {
    options: [
      { displayName: 'Home', value: 'home' },
      { displayName: 'About', value: 'about' },
      { displayName: 'Services', value: 'services' },
      { displayName: 'Products', value: 'products' },
      { displayName: 'Contact', value: 'contact' },
      { displayName: 'Blog', value: 'blog' },
      { displayName: 'Careers', value: 'careers' },
    ],
    onSelect: (value: string) => {
      console.log(value);
    },
  },
  render: (args) => ({
    components: { Dropdown },
    setup() {
      return { args };
    },
    template: '<Dropdown v-bind="args"></Dropdown>',
  }),
};

export const WithCustomAriaLabel: Story = {
  args: {
    options: [
      { displayName: 'Edit', value: 'edit' },
      { displayName: 'Delete', value: 'delete' },
      { displayName: 'Share', value: 'share' },
    ],
    ariaLabel: 'Actions menu',
    onSelect: (value: string) => {
      console.log(value);
    },
  },
  render: (args) => ({
    components: { Dropdown },
    setup() {
      return { args };
    },
    template: '<Dropdown v-bind="args"></Dropdown>',
  }),
};



