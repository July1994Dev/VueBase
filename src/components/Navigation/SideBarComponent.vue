<script setup>
import MenuSectionComponent from './MenuSectionComponent.vue';
import MenuItemComponent from './MenuItemComponent.vue';
import { ref } from 'vue';

const listaMenu = [
    {
        title: "Recursos Humanos",
        items: [
            // {
            //     type: "single",
            //     text: "Elemento simple",
            //     icon: "pe-7s-diamond",
            //     route: "/",
            //     childs: []
            // },
            {
                type: "single",
                text: "Departamentos",
                icon: "pe-7s-plugin",
                route: "/Departamentos",
                childs: []
            },
            {
                type: "single",
                text: "Puestos",
                icon: "pe-7s-diamond",
                route: "/Puestos",
                childs: []
            },
            {
                type: "single",
                text: "Empleados",
                icon: "pe-7s-diamond",
                route: "/Empleados",
                childs: []
            }
        ]
    },
    {
        title: "Ventas",
        items: [
            {
                type: "multi",
                text: "Documentos",
                icon: "pe-7s-plugin",
                childs: [
                    {
                        type: "single",
                        text: "Ventas",
                        icon: "pe-7s-plugin",
                        route: "/Ventas",
                    }
                ]
            },
            {
                type: "multi",
                text: "Catalogos",
                icon: "pe-7s-plugin",
                childs: [
                    {
                        type: "single",
                        text: "Productos",
                        icon: "pe-7s-plugin",
                        route: "/Ventas/Catalogos/Productos",
                    },
                    {
                        type: "single",
                        text: "Servicios",
                        icon: "pe-7s-plugin",
                        route: "/Ventas/Catalogos/Servicios",
                    }
                ]
            }
        ]
    },
    {
        title: "Compras",
        items: [
            {
                type: "multi",
                text: "Documentos",
                icon: "pe-7s-plugin",
                childs: [
                    {
                        type: "single",
                        text: "Cotizaciones",
                        icon: "pe-7s-plugin",
                        route: "/",
                    }
                ]
            }
        ]
    }
];

const isOpen = ref(false);
const sidebarActive = ref(false);
const collapsed = ref(true);
const windowWidth = ref(0);


const toggleBodyClass = (className) => {
    const el = document.getElementsByClassName("app-container");
    console.log(el);
    isOpen.value = !isOpen.value;

    if (isOpen.value) {
        el.classList.add(className);
    } else {
        el.classList.remove(className);
    }
};

const toggleSidebarHover = (add, className) => {
    const el = document.getElementsByClassName("app-container");
    console.log(el);

    sidebarActive.value = !sidebarActive.value;

    windowWidth.value = document.documentElement.clientWidth;

    if (windowWidth.value > "992") {
        if (add === "add") {
            el.classList.add(className);
        } else {
            el.classList.remove(className);
        }
    }
};

</script>

<template>
    <div class="app-sidebar sidebar-shadow">
        <div class="app-header__logo">
            <div class="logo-src"></div>
            <div class="header__pane ml-auto">
                <div>
                    <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar"
                        v-bind:class="{ 'is-active': isOpen }" @click="toggleBodyClass('closed-sidebar')">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="app-header__mobile-menu">
            <div>
                <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-header__menu">
            <span>
                <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                    <span class="btn-icon-wrapper">
                        <i class="fa fa-ellipsis-v fa-w-6"></i>
                    </span>
                </button>
            </span>
        </div>
        <div class="scrollbar-sidebar">
            <div class="app-sidebar__inner">
                <MenuSectionComponent :name="item.title" v-for="(item, index) in listaMenu" :key="index">
                    <MenuItemComponent v-for="link in item.items" :type="link.type" :text="link.text" :icon="link.icon"
                        :route="link.type == 'single' ? link.route : ''" :key="link.text">
                        <MenuItemComponent v-for="submenu in link.childs" :type="submenu.type" :text="submenu.text"
                            :route="submenu.route" :key="submenu.text">
                        </MenuItemComponent>
                    </MenuItemComponent>
                </MenuSectionComponent>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
