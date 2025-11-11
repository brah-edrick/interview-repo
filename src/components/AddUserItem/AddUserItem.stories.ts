import type { Meta, StoryObj } from '@storybook/vue3-vite';

import AddUserItem from './AddUserItem.vue';

const meta = {
  title: 'Components/AddUserItem',
  component: AddUserItem,
  tags: ['autodocs'],
  argTypes: {
    user: {
      control: 'object',
      description: 'User object with userId, name, and location',
    },
    onAdd: {
      action: 'added',
      description: 'Callback function called when user is added',
    },
    as: {
      control: 'select',
      options: ['div', 'li'],
      description: 'HTML element to render as (div or li)',
    },
  },
} satisfies Meta<typeof AddUserItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      userId: '1',
      name: 'John Doe',
      location: 'New York, NY',
    },
    onAdd: (user) => {
      console.log('adding user:', user);
    },
  },
};

export const WithImage: Story = {
  args: {
    user: {
      userId: '2',
      name: 'Brandon Hedrick',
      location: 'Honolulu, HI',
      imageUrl: 'https://avatars.githubusercontent.com/u/160375103?v=4',
    },
  },
};

export const AsListItem: Story = {
  args: {
    user: {
      userId: '1',
      name: 'Listy McItem',
      location: 'Inside an Unordered List',
    },
    as: 'li',
  },
  render: (args) => ({
    components: { AddUserItem },
    setup() {
      return { args };
    },
    template: `
      <ul style="list-style: none; padding: 0; margin: 0;">
        <AddUserItem v-bind="args" />
      </ul>
    `,
  }),
};



