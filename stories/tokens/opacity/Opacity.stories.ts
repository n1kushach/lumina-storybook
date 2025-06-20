import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Opacity } from './Opacity';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Tokens/Opacity',
  component: Opacity,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
 argTypes: {
  backgroundColor: { control: 'color' },
  opacity: {
    control: 'select',
    options: [
      'none',
      'hover',
      'focus',
      'press',
      'active',
    ],
  },
},


} satisfies Meta<typeof Opacity>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    opacity: 'none',
    backgroundColor: '#000000',
  },
};



