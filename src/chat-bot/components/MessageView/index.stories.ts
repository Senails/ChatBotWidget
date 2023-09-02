import type { Meta, StoryObj } from '@storybook/vue3';
import MessageView from './MessageView.vue';

const meta = {
  title: 'ChatBot/Components/MessageView',
  component: MessageView,
  render: (args: any) => ({
    components: { MessageView },
    setup() {
      return { args };
    },
    template: `
    <div :style="{width:'400px', height: '500px', border: '1px solid red'}">
      <message-view :messageList="args.messageList" />
    </div>`,
  }),
} satisfies Meta<typeof MessageView>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args:{
    messageList:[
      {text:'me dasda ddasd a s12312',authorname:"bosdsa",date:"16:49",id:1},
      {text:'s112',authorname:"",date:"16:49",id:2},
      {text:'ms12dsa das das312',authorname:"bosdsa",date:"16:49",id:3},
      {text:'mes12 dsa dsa312',authorname:"bosdsa",date:"16:49",id:4},
      {text:'mes12312',authorname:"",date:"16:49",id:5},
      {text:'mes12 dsadas dsad dasd sa da  dsad  dsadas d312',authorname:"bosdsa",date:"16:49",id:6},
      {text:'mes12312',authorname:"",date:"16:49",id:7},
      {text:'mes12d           sa ass d312',authorname:"",date:"16:49",id:8},
      {text:'mes12312',authorname:"",date:"16:49",id:9},
      
    ]
  }
};

