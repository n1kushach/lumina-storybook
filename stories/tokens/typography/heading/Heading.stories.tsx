import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Heading } from './Heading';




// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Tokens/Typography/Heading',
  component: Heading,
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
      "Heading 1",
      "Heading 2",
      "Heading 3",
      "Heading 4",
      "Heading 5",
      "Heading 6",
      "Heading 7",
    ]
  }
},


} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Heading01: Story = {
  args: {
    color: '#000000',
    text: "This is a heading text example.",
    type: "Heading 1"
  },
};
export const Heading02: Story = {
  args: {
    color: '#000000',
    text: "This is a heading text example.",
    type: "Heading 2"
  },
};
export const Heading03: Story = {
  args: {
    color: '#000000',
    text: "This is a heading text example.",
    type: "Heading 3"
  },
};
export const Heading04: Story = {
  args: {
    color: '#000000',
    text: "This is a heading text example.",
    type: "Heading 4"
  },
};
export const Heading05: Story = {
  args: {
    color: '#000000',
    text: "This is a heading text example.",
    type: "Heading 5"
  },
};
export const Heading06: Story = {
  args: {
    color: '#000000',
    text: "This is a heading text example.",
    type: "Heading 6"
  },
};
export const Heading07: Story = {
  args: {
    color: '#000000',
    text: "This is a heading text example.",
    type: "Heading 7"
  },
};



 



