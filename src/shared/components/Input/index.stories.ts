import type { Meta, StoryObj } from '@storybook/vue3';
import MyInput from './MyInput.vue';
import { ref, watch } from 'vue';


const meta = {
  title: 'Components/MyInput',
  component: MyInput,
  render: (args: any) => ({
    components: { MyInput },
    setup() {
        const charLimit = ref(args.charLimit);
        const text = ref(args.text);
        const onChange = (t:string)=>{
          text.value = t;
        }
        watch(args,()=>{
            charLimit.value = args.charLimit;
            text.value = args.text;
        })

        return { text, onChange, charLimit };
    },
    template: `
    <my-input 
    :text="text" 
    :charLimit="charLimit"
    :onChange="onChange"
    />
    `,
  }),
} satisfies Meta<typeof MyInput>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args:{
    charLimit: 50,
    text:"12"
  }
};