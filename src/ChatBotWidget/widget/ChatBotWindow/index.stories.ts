import type { Meta, StoryObj } from '@storybook/vue3';
import ChatBotWindow from './ChatBotWindow.vue';

const meta = {
  title: 'ChatBot/ChatBotWindow',
  component: ChatBotWindow,
} satisfies Meta<typeof ChatBotWindow>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args:{
  }
};

