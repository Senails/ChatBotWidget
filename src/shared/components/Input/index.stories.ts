import type { Meta, StoryObj } from '@storybook/vue3';
import MyInput from './MyInput.vue';

const meta = {
  title: 'Components/MyInput',
  component: MyInput,
} satisfies Meta<typeof MyInput>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args:{
    text:'111',
    onChange: (text)=>{
      
    },
    charLimit: 50
  }
};