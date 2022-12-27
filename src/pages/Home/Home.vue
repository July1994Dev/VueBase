<script setup>
import { onMounted, ref } from 'vue';
import ContentHeader from '../../components/Header/ContentHeader.vue';
import UserComponent from '../User/UserComponent.vue';
import { useModalStore } from '../../stores';
import FormLoginComponent from '../Login/FormLoginComponent.vue';
import { GetAll } from '../../services/account.js';
import { TabComponent } from '../../components/UI/Tab';
import 'animate.css';

const { showModal } = useModalStore();

onMounted(() => {
    // GetAll().then(response =>{
    //     console.log(response);
    // });
});
</script>

<template>
    <TabComponent></TabComponent>
    <ContentHeader class="animate__animated animate__bounce animate__repeat-2">
        <template v-slot:Icon>
            <i class="pe-7s-car icon-gradient bg-mean-fruit" v-on:click="showModal(FormLoginComponent)"></i>
        </template>
        <template v-slot:Title>
            Usuarios
        </template>
        <template v-slot:Description>
            En este modulo se pueden visualizar todos los usuarios registrados en la plataforma.
        </template>
        <template v-slot:Controls>
            <div>
                <button type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom"
                    class="btn-shadow mr-3 btn btn-dark">
                    <i class="fa fa-star"></i>
                </button>
                <div class="d-inline-block dropdown">
                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        class="btn-shadow dropdown-toggle btn btn-info">
                        <span class="btn-icon-wrapper pr-2 opacity-7">
                            <i class="fa fa-business-time fa-w-20"></i>
                        </span>
                        Buttons
                    </button>
                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link">
                                    <i class="nav-link-icon lnr-inbox"></i>
                                    <span> Inbox</span>
                                    <div class="ml-auto badge badge-pill badge-secondary">
                                        86
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">
                                    <i class="nav-link-icon lnr-book"></i>
                                    <span> Book</span>
                                    <div class="ml-auto badge badge-pill badge-danger">
                                        5
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">
                                    <i class="nav-link-icon lnr-picture"></i>
                                    <span> Picture</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a disabled="" class="nav-link disabled">
                                    <i class="nav-link-icon lnr-file-empty"></i>
                                    <span> File Disabled</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </template>
    </ContentHeader>
    <UserComponent></UserComponent>
</template>