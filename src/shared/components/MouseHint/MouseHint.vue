<script setup lang="ts">
    import './entiti';

    const props = defineProps<{
        text: string,
        disable?: boolean
    }>();
</script>

<template>
    <hover-hint :text="props.text" :disable="props.disable">
        <slot></slot>
    </hover-hint>
</template>


