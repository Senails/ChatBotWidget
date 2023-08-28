<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import styles from'./index.module.scss';


type TPropsType = {
  text?: string,
  charLimit?: number,
  onChange?: (newtext:string )=>void,
}

const props = defineProps<TPropsType>();

let innerText = ref(props.text);
watch(props,()=>{
    innerText.value = props.text;
})


let onInput = computed(()=>(event: Event)=>{
    let target = ((event as InputEvent).target as HTMLInputElement);
    let newValue = target.value;
    if (props.charLimit && props.charLimit>0 
    && newValue.length>props.charLimit) newValue = newValue.slice(0,props.charLimit);

    props.onChange?.(newValue);
    innerText.value = newValue;
    target.value = newValue;
})


</script>

<template>
    <div :class="styles.MyInput+` noselect`" :d-sd="text">
        {{ innerText }}
        <textarea :value="innerText" @input="(event)=>onInput(event)"></textarea>
        <span v-if="props.charLimit && props.charLimit>0">{{innerText?.length}}/{{props.charLimit}}</span>
    </div>
</template>

