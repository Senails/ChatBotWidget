<script lang="ts" setup>
import styles from'./MyButton.module.scss';

type TPropsType = {
  text?: string,
  onClick?: ()=>void
}

const {text, onClick} = defineProps<TPropsType>()

</script>

<template>
    <span :class="styles.MyButton+` noselect`" @click="onClick">
        {{text}}
    </span>
</template>

