import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Shadow } from './Shadow';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Tokens/Shadow',
  component: Shadow,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
 argTypes: {
  backgroundColor: { control: 'color' },
  shadow: {
    control: 'select',
    options: [
      'none',
      'extraSmall',
      'small',
      'medium',
      'large',
      'extraLarge',
      'extraLarge2',
      'innerShadow',
    ],
  },
},


} satisfies Meta<typeof Shadow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    shadow: 'none',
    backgroundColor: '#000000',
  },
};



