<script setup>
import { ref } from 'vue';

const props = defineProps({
    name: String
});

const sectionName = props.name;

</script>

<template>
    <ul class="vertical-nav-menu">
        <li class="app-sidebar__heading">{{ sectionName }}</li>
        <slot></slot>
    </ul>
</template>