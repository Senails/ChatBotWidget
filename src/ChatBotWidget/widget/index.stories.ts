import type { Meta, StoryObj } from '@storybook/vue3';
import ChatBotWidget from './ChatBotWidget.vue';

const meta = {
  title: 'ChatBot/ChatBotWidget',
  component: ChatBotWidget,
} satisfies Meta<typeof ChatBotWidget>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args:{
    text: "112m",
    onClick: ()=>{
      console.log(1);
    }
  }
};

export const Second: Story = {
  args:{
    text: "Send",
    onClick: ()=>{
      console.log("send");
    }
  }
};
