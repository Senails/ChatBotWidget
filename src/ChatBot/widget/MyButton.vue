<script lang="ts" setup>
import styles from'./MyButton.module.scss';

type TPropsType = {
  text?: string,
  onClick?: ()=>void,
  backgroundColor?:string;
  color?:string;
}

const {text, onClick, backgroundColor, color} = defineProps<TPropsType>()

</script>

<template>
    <span :class="styles.MyButton+` noselect`" 
    :style="{backgroundColor, color}"
    @click="onClick">
        {{text}}
    </span>
</template>

