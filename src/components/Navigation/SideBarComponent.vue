<script setup>
import MenuSectionComponent from './MenuSectionComponent.vue';
import MenuItemComponent from './MenuItemComponent.vue';

const listaMenu = [
    {
        title: "Menu 1",
        items: [
            {
                type: "single",
                text: "Elemento simple",
                icon: "pe-7s-diamond",
                route: "/",
                childs: []
            },
            {
                type: "multi",
                text: "Elemento multinivel",
                icon: "pe-7s-diamond",
                route: "/",
                childs: [
                    {
                        type: "single",
                        text: "Menu 1",
                        route: "/",
                        childs: []
                    },
                    {
                        type: "single",
                        text: "Menu 2",
                        route: "/",
                        childs: []
                    },
                    {
                        type: "single",
                        text: "Menu 3",
                        route: "/",
                        childs: []
                    },
                    {
                        type: "single",
                        text: "Menu 4",
                        route: "/",
                        childs: []
                    }
                ]
            }
        ]
    },
    {
        title: "Segundo elemento",
        items: [
            {
                type: "single",
                text: "Elemento singular",
                icon: "pe-7s-diamond",
                route: "/",
                childs: []
            },
            {
                type: "multi",
                text: "Elemento multinivel",
                icon: "pe-7s-diamond",
                route: "/",
                childs: [
                    {
                        type: "single",
                        text: "Menu 1",
                        route: "/",
                        childs: []
                    },
                    {
                        type: "single",
                        text: "Menu 2",
                        route: "/",
                        childs: []
                    },
                    {
                        type: "single",
                        text: "Menu 3",
                        route: "/",
                        childs: []
                    },
                    {
                        type: "single",
                        text: "Menu 4",
                        route: "/",
                        childs: []
                    }
                ]
            }
        ]
    }
];
</script>

<template>
    <div class="app-sidebar sidebar-shadow">
        <div class="app-header__logo">
            <div class="logo-src"></div>
            <div class="header__pane ml-auto">
                <div>
                    <button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
                        data-class="closed-sidebar">
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
                    <MenuItemComponent v-for="link in item.items" :type="link.type" :text="link.text" :icon="link.icon" :route="link.route" :key="link.text">
                        <MenuItemComponent v-for="submenu in link.childs" :type="submenu.type" :text="submenu.text" :route="submenu.route" :key="submenu.text">
                        </MenuItemComponent>
                    </MenuItemComponent>
                </MenuSectionComponent>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
