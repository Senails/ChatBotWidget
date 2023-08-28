<script lang="ts" setup>
import styles from'./index.module.scss';
import { computed } from 'vue';
import MyButton from '../../../shared/components/Button/MyButton.vue';

type TPropsType = {
  list: string[],
  onClick?: (text:string, index: number)=>void,
}

let props = defineProps<TPropsType>();
let list = computed(()=>props.list);

</script>

<template>
    <div :class="styles.ButtonsList">
        <div v-for="value,key in list" :key="key" :style="{display:`inline-block`, margin:`5px`}">
            <MyButton :text=value  @click="()=>props.onClick?.(value,key)"/>
        </div>
    </div>
</template>

