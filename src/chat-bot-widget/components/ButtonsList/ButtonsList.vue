<script lang="ts" setup>
import styles from'./index.module.scss';
import {ref, watch } from 'vue';
import MyButton from '../../../shared/components/Button/MyButton.vue';


type TPropsType = {
  list: string[],
  onClick?: (text:string, index: number)=>void,
}

const props = defineProps<TPropsType>();
let list = ref([...props.list,"{x}"]);


const clickHandler = (text:string, index: number)=>{
    if (index == list.value.length-1){
        list.value = [];
        return;
    }
    props.onClick?.(text,index)
}
watch(props,()=>{
    list.value = [...props.list,"{x}"];
})
</script>

<template>
    <div v-if="list.length>1" :class="styles.ButtonsList">
        <div v-for="value,key in list" :key="key" :style="{display:`inline-block`, margin:`5px`}">
            <MyButton :text=value  @click="()=>clickHandler(value,key)"/>
        </div>
    </div>
</template>

