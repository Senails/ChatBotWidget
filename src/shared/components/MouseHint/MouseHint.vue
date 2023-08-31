<script setup lang="ts">
    import './entiti';

    const props = defineProps<{
        text: string,
    }>();
</script>

<template>
    <hover-hint :text="props.text">
        <slot></slot>
    </hover-hint>
</template>


