import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Utility } from './Utility';




// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Tokens/Typography/Utility',
  component: Utility,
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
      "Label-01",
      "Label-02",
      "Label-03",
      "Helper-01",
      "Helper-02",
      "Legal-01",
      "Legal-02",
      "Metric-01",
      "Metric-02",
      "Metric-03",
    ]
  }
},


} satisfies Meta<typeof Utility>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Label01: Story = {
  args: {
    color: '#000000',
    text: "This is a utility text example.",
    type: "Label-01"
  },
};
export const Label02: Story = {
  args: {
    color: '#000000',
    text: "This is a utility text example.",
    type: "Label-02"
  },
};

export const Label03: Story = {
  args: {
    color: '#000000',
    text: "This is a utility text example.",
    type: "Label-03"
  },
};

export const Helper01: Story = {
  args: {
    color: '#000000',
    text: "This is a utility text example.",
    type: "Helper-01"
  },
};

export const Helper02: Story = {
  args: {
    color: '#000000',
    text: "This is a utility text example.",
    type: "Helper-02"
  },
};

export const Legal01: Story = {
  args: {
    color: '#000000',
    text: "This is a utility text example.",
    type: "Legal-01"
  },
};

export const Legal02: Story = {
  args: {
    color: '#000000',
    text: "This is a utility text example.",
    type: "Legal-02"
  },
};

export const Metric01: Story = {
  args: {
    color: '#000000',
    text: "This is a utility text example.",
    type: "Metric-01"
  },
};

export const Metric02: Story = {
  args: {
    color: '#000000',
    text: "This is a utility text example.",
    type: "Metric-02"
  },
};

export const Metric03: Story = {
  args: {
    color: '#000000',
    text: "This is a utility text example.",
    type: "Metric-03"
  },
};
 



