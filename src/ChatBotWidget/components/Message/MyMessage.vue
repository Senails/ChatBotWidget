<script lang="ts" setup>
import { computed} from 'vue';
import styles from'./index.module.scss';
import { UpdateStore, useSelector } from '@/ChatBotWidget/Entities/Store';

type TPropsType = {
  text: string,
  date: string,
  authorname: string,
  align?: "left"|"right"
}


const props = defineProps<TPropsType>()
const reverse = computed(()=>props.align==="right"?styles.reverse:"");

</script>

<template>
    <div :class="styles.Message+` `+reverse">
        <span :class="styles.AuthtorName">{{ props.authorname }}</span>
        <span :class="styles.Text">{{ props.text }}</span>
        <span :class="styles.Date">{{ props.date }}</span>
    </div>
</template>

