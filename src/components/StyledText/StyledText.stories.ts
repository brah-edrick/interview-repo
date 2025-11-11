import type { Meta, StoryObj } from '@storybook/vue3-vite';

import StyledText from './StyledText.vue';

const meta = {
  title: 'Components/StyledText',
  component: StyledText,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      description: 'HTML element to render as',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'bold'],
      description: 'Font weight using CSS variable',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'medium', 'large'],
      description: 'Font size using CSS variable',
    },
    color: {
      control: 'select',
      options: ['black', 'gray-300'],
      description: 'Text color using CSS variable',
    },
  },
} satisfies Meta<typeof StyledText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const RegularText: Story = {
  args: {
    as: 'p',
    weight: 'regular',
    size: 'default',
  },
};

export const HeadingStyle: Story = {
  args: {
    as: 'h1',
    weight: 'bold',
    size: 'large',
  },
};

export const GrayText: Story = {
  args: {
    as: 'p',
    weight: 'regular',
    size: 'default',
    color: 'gray-300',
  },
};

export const GrayHeading: Story = {
  args: {
    as: 'h2',
    weight: 'bold',
    size: 'large',
    color: 'gray-300',
  },
};





