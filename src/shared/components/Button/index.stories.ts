import type { Meta, StoryObj } from '@storybook/vue3';
import MyButton from './MyButton.vue';

const meta = {
  title: 'Components/MyButton',
  component: MyButton,
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args:{
    text: "112m",
    onClick: ()=>{
      console.log(1);
    },
    backgroundColor:"#000000",
    color:"#ffffff"
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
