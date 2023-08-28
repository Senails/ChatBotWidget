<script lang="ts" setup>
import styles from'./index.module.scss';
import ButtonsList from '../../components/ButtonsList/ButtonsList.vue';
import MyInput from '../../../shared/components/Input/MyInput.vue';
import MyButton from '../../../shared/components/Button/MyButton.vue';
import MessageView from '../../components/MessageView/MessageView.vue';
import { ref } from 'vue';

import type { TMessageType } from '../../types';


type TPropsType = {
    onWantMove?: ()=>void | undefined,
    onClickClose?: ()=>void,
    onSendMessage?: (mess: string)=>void,
    showMoveButton?: boolean,
    fastMessageList?: string[],
    prevMessageList?: TMessageType[],
}

const props = defineProps<TPropsType>();
const text = ref("");

const SendMessege = (mess: string)=>{
    props.onSendMessage?.(mess);
    text.value = "";
}
const CloseChat = ()=>{
    props.onClickClose?.();
}

</script>

<template>
    <div :class="styles.ChatBotWidget">
        <div :class="styles.MessageSection">
            <div>
                <MessageView :message-list="props.prevMessageList||[]"/>
            </div>
        </div>
        <div :class="styles.InputSection">
            <div :class="styles.ButtonListConteiner">
                <ButtonsList v-bind:="{list: props.fastMessageList||[], onClick: SendMessege}"/>
            </div>
            <div :class="styles.InputConteiner">
                <div>
                    <MyButton 
                    text="Send" 
                    background-color="black" 
                    color="white"
                    :onClick="()=>text.length>0 && SendMessege(text)"
                    />
                </div>
                <div>
                    <MyInput v-bind:="{
                        text , 
                        charLimit: 300, 
                        onChange: (t)=>{text=t},
                        plaeholder: 'введите сообщение'
                    }"/>
                </div>
            </div>
        </div>
        <button @click="CloseChat">x{{ rrrr }}</button>
        <button 
        :on-mousedown="props.onWantMove"
        :hidden="!showMoveButton"
        > 
        {{`<->`}}
    </button> 
    </div>
</template>

