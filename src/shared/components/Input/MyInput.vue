<script lang="ts" setup>
import styles from'./index.module.scss';


type TPropsType = {
  text?: string,
  charLimit?: number,
  onChange?: (newtext:string )=>void,
}


const props = defineProps<TPropsType>();
function onInput(event: InputEvent){
  let target = (event.target as HTMLInputElement);
  let newValue = target.value;

  if (props.charLimit && props.charLimit<newValue.length){
    newValue = newValue.slice(0,props.charLimit);
  }

  props.onChange?.(newValue);
  target.value = newValue;
}

</script>

<template>
    <div :class="styles.MyInput+` noselect`" :d-sd="text">
          {{ props.text}}
        <textarea :value="props.text" @input="(event)=>onInput(event as InputEvent)"></textarea>
        <span v-if="props.charLimit && props.charLimit>0">{{props.text?.length}}/{{props.charLimit}}</span>
    </div>
</template>

