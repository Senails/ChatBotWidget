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
    onClickClose() {
        
    },
    onSendMessage(){

    },
    // onWantMove() {
        
    // },
    fastMessageList: ["Пиццу1", "Роллы1", "Газировку", "Кушать"],
    prevMessageList: [
      {text:'me dasda ddasd a s12312',authorname:"bosdsa",date:"16:49",id:1},
      {text:'s112',authorname:"",date:"16:49",id:2},
      {text:'ms12dsa das das312',authorname:"bosdsa",date:"16:49",id:3},
      {text:'mes12 dsa dsa312',authorname:"bosdsa",date:"16:49",id:4},
      {text:'mes12312',authorname:"",date:"16:49",id:5},
      {text:'mes12 dsadas dsad dasd sa da  dsad  dsadas d312',authorname:"bosdsa",date:"16:49",id:6},
      {text:'mes12312',authorname:"",date:"16:49",id:7},
      {text:'mes12d           sa ass d312',authorname:"",date:"16:49",id:8},
      {text:'mes12312',authorname:"",date:"16:49",id:9}, 
  ],
  }
};

