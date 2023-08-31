import type { Meta, StoryObj } from '@storybook/vue3';
import MyMessage from './MyMessage.vue';

const meta = {
  title: 'ChatBot/Components/MyMessage',
  component: MyMessage,
} satisfies Meta<typeof MyMessage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args:{
    text:"text",
    authorname:"name",
    date:"15:34",
    align:"left"
  }
};