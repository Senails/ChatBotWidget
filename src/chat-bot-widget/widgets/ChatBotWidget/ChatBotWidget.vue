<script lang="ts" setup>
import styles from'./index.module.scss';
import ButtonsList from '../../components/ButtonsList/ButtonsList.vue';
import MyInput from '../../../shared/components/Input/MyInput.vue';
import MyButton from '../../../shared/components/Button/MyButton.vue';
import MyMessage from '../../components/Message/MyMessage.vue';
import MessageView from '../../components/MessageView/MessageView.vue';
import { ref } from 'vue';
import { useSelector } from '@/chat-bot-widget/Entities/Store';
import { SendMessageToBot } from '@/chat-bot-widget/Entities/Actions';




type TPropsType = {
    onWantMove?: (event:MouseEvent)=>void | undefined,
    onClickClose?: ()=>void,
    showMoveButton?: boolean,
}

const props = defineProps<TPropsType>();
const inputText = ref("");
const store = useSelector((s)=>s);


const SendMessege = (mess: string)=>{
    SendMessageToBot(mess);
    inputText.value = "";
}
const CloseChat = ()=>{
    props.onClickClose?.();
}
</script>

<template>
    <div :class="styles.ChatBotWidget">
        <!-- messages -->
        <div :class="styles.MessageSection">
            <div>
                <MessageView :message-list="store.prevMessageList"/>
            </div>
        </div>

        <!-- bot is loading -->
        <div :class="styles.BotIsLoading +` ${!store.botIsLoading?styles.Hide:''}`">
            <MyMessage text="я думаю..." authorname="ChatBot" date=""/>
        </div>

        <!-- input and buttons -->
        <div :class="styles.InputSection">
            <div v-if="!store.botIsLoading" :class="styles.ButtonListConteiner +` ${store.botIsLoading?styles.Hide:''}`">
                <ButtonsList v-bind:="{list: store.fastMessageList , onClick: SendMessege}"/>
            </div>
            <div :class="styles.InputConteiner">
                <div>
                    <MyButton text="^" background-color="black" color="white" 
                        :onClick="()=>inputText.length>0 && SendMessege(inputText)"
                    />
                </div>
                <div>
                    <MyInput v-bind:="{
                        text: inputText, 
                        charLimit: 300, 
                        onChange: (t)=>{inputText=t},
                        plaeholder: 'введите сообщение'
                    }"/>
                </div>
            </div>
        </div>

        <!-- close and move buttons -->
        <button @click="CloseChat">x</button>
        <button 
        @mousedown="props.onWantMove" 
        :hidden="!showMoveButton"> 
            {{`<->`}}
        </button> 
    </div>
</template>

