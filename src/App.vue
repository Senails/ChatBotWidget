<script setup lang="ts">
    import { ref } from 'vue';
    import ChatBotWindow from './ChatBotWidget/widget/ChatBotWindow/ChatBotWindow.vue';
    import MyButton from './shared/components/Button/MyButton.vue';

    let flag = ref(false);

</script>

<template>
    <div :class="'App'">
        <MyButton v-if="!flag" text="Открыть чат бота" :onClick="()=>flag=!flag"/>
    </div>
    <Teleport v-if="flag" to="body">
        <ChatBotWindow :onClickClose="()=>flag=!flag"/>
    </Teleport>
</template>
