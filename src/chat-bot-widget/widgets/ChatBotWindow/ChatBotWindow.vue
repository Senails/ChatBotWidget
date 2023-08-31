<!-- компонент окна , для возможности перемещения окошечка -->
<script lang="ts" setup>
import styles from'./index.module.scss';
import ChatBotWidget from '../ChatBotWidget/ChatBotWidget.vue';
import { computed, ref } from 'vue';
import { MoveStart, useSelector } from './state';


type TPropsType = {
    onClickClose?: ()=>void,
}

const props = defineProps<TPropsType>();
let conteiner = ref<HTMLDivElement|null>(null);

const state = useSelector((s)=>s);
const styleObject = computed(()=>{
    return {
        top: state.value.Y+'px',
        left: state.value.X+'px',
        transform: "translate(0,0)"
    }
});


</script>

<template>
    <div ref="conteiner" id="ChatModal"
    :class="styles.ChatBotWindow"
    :style="state.moved?styleObject:{}"
    >
        <ChatBotWidget 
        :onClickClose="props.onClickClose"
        :onWantMove="(event)=>MoveStart(event,conteiner)"
        :show-move-button="true"
        />
    </div>
</template>