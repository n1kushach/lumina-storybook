import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Body } from './Body';




// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Typography/Body',
  component: Body,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
 argTypes: {
  color: { control: 'color' },
  text:{
    control: "text"
  },
  type: {
    control: "select",
    options: [
      "Body-Compact-01",
      "Body-Compact-02",
      "Body-01",
      "Body-02",
    ]
  }
},


} satisfies Meta<typeof Body>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BodyCompact01: Story = {
  args: {
    color: '#000000',
    text: "This is a body text example.",
    type: "Body-Compact-01"
  },
};
export const BodyCompact02: Story = {
  args: {
    color: '#000000',
    text: "This is a body text example.",
    type: "Body-Compact-02"
  },
};
export const Body01: Story = {
  args: {
    color: '#000000',
    text: "This is a body text example.",
    type: "Body-01"
  },
};
export const Body02: Story = {
  args: {
    color: '#000000',
    text: "This is a body text example.",
    type: "Body-02"
  },
};



