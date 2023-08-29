<script lang="ts" setup>
import styles from'./index.module.scss';
import MyMessage from '../Message/MyMessage.vue';
import { computed} from 'vue';
import type { TMessageType } from '@/ChatBotWidget/types';

type TPropsType = {
  messageList: TMessageType[],
}

const props = defineProps<TPropsType>()
const messageList = computed(()=>{
    let arr = props.messageList.map((e)=>e).reverse();
    if (props.messageList.length<50) return arr;
    return arr.slice(0,50);
})
</script>

<template>
    <div :class="styles.MessageView">
        <div  v-for="elem in messageList" 
        :class="styles.MessageConteiner" 
        :key="elem.id"
        :style="{textAlign: elem.authorname==``?'right':'left'}"
        >
            <MyMessage 
            :text="elem.text" 
            :date="elem.date" 
            :authorname="elem.authorname==``?'Вы':elem.authorname"
            :align="elem.authorname==``?'right':'left'"
            />
        </div>
    </div>
</template>

