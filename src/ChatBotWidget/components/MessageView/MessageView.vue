<script lang="ts" setup>
import type { TMessageType } from '@/ChatBot/types';
import styles from'./index.module.scss';
import MyMessage from '../Message/MyMessage.vue';
import { computed } from 'vue';

type TPropsType = {
  messageList: TMessageType[],
}

const props = defineProps<TPropsType>()
const messageList = computed(()=>props.messageList.map((e)=>e).reverse())

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
            :authorname="elem.authorname==``?'its your message':elem.authorname"
            :align="elem.authorname==``?'right':'left'"
            />
        </div>
    </div>
</template>

