<script lang="ts" setup>
import styles from'./index.module.scss';
import ChatBotWidget from '../ChatBotWidget/ChatBotWidget.vue';
import { computed, ref } from 'vue';
import { updateStore, useSelector } from './state';


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
})


function MoveStart(event: MouseEvent){
    const startX = event.clientX;
    const startY = event.clientY;
    const {top, left} = conteiner.value!.getBoundingClientRect();

    window.addEventListener('mousemove',MouseMove);
    window.addEventListener('mouseup',MouseUp);
    if (!state.value.moved) window.addEventListener('resize',Resize);

    function MouseMove(event: MouseEvent){
        let deltaX = event.clientX - startX;
        let deltaY = event.clientY - startY;

        let newTop = Math.min(
            Math.max(top + deltaY, 0),
            window.innerHeight - conteiner.value!.clientHeight);
        let newLeft = Math.min(
            Math.max(left + deltaX, 0),
            window.innerWidth - conteiner.value!.clientWidth);

        Math.min(Math.max(top + deltaY, 0),window.screen.height - 500)
        Math.min(Math.max(left + deltaX, 0),window.screen.width - 400)

        updateStore((s)=>{
            s.X = newLeft;
            s.Y = newTop;
            s.moved = true;
            return s;
        })
    }
    function MouseUp(){
        window.removeEventListener('mousemove',MouseMove);
        window.removeEventListener('mousemove',MouseUp);
    }
    function Resize(){
        const conteiner = document.getElementById('ChatModal');
        if (!conteiner) return;
        const {top, left} = conteiner.getBoundingClientRect();

        let newTop = Math.min(Math.max(top, 0),window.innerHeight - conteiner.clientHeight);
        let newLeft = Math.min(Math.max(left, 0),window.innerWidth - conteiner.clientWidth);
        
        console.log(top, left , newTop , newLeft)

        updateStore((s)=>{
            s.X = newLeft;
            s.Y = newTop;
            return s;
        })
    }
}


</script>

<template>
    <div ref="conteiner" id="ChatModal"
    :class="styles.ChatBotWindow"
    :style="state.moved?styleObject:{}"
    >
        <ChatBotWidget 
        :onClickClose="props.onClickClose"
        :onWantMove="MoveStart"
        :show-move-button="true"
        />
    </div>
</template>