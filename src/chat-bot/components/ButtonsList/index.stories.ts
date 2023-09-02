import type { Meta, StoryObj } from '@storybook/vue3';
import ButtonsList from './ButtonsList.vue';

const meta = {
  title: 'ChatBot/Components/ButtonsList',
  component: ButtonsList,
} satisfies Meta<typeof ButtonsList>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args:{
    list: ["Пиццу", "Роллы", "Газировку", "Кушать", "Ананас"],
    onClick: (text, index)=>{
      console.log(text, index);
    }
  }
};

