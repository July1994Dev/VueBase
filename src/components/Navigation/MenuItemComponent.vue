<script setup>
import { ref } from 'vue';
const props = defineProps({
    type: "single" | "multi",
    text: String,
    icon: "caret-left",
    route: String
});

const { type, text, route, icon } = props;
</script>

<template>
    <li class="">
        <router-link :to="type == 'single' ? route : ''">
            <i :class="'metismenu-icon ' + icon"></i>{{ text }}
            <i v-if="type == 'multi'" class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
        </router-link>
        <ul v-if="type == 'multi'" class="m-collapse">
            <slot></slot>
        </ul>
    </li>
</template>