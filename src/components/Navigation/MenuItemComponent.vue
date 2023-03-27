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
        <a href="#" v-if="type == 'multi'">
            <i :class="'metismenu-icon ' + icon"></i>{{ text }}
            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
        </a>
        <router-link v-else :to="route">
            <i :class="'metismenu-icon ' + icon"></i>{{ text }}
        </router-link>
        <ul v-if="type == 'multi'" class="m-collapse">
            <slot></slot>
        </ul>
    </li>
</template>