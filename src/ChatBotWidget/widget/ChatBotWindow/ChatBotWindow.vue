<script lang="ts" setup>
import styles from'./index.module.scss';
import ChatBotWidget from '../ChatBotWidget/ChatBotWidget.vue';
import { ref } from 'vue';

let conteiner = ref(null);



</script>

<template>
    <div ref="conteiner" :class="styles.ChatBotWindow">
        <ChatBotWidget />
    </div>
</template>

