<script setup>
import { markRaw } from 'vue';
import { SimpleAlert, ToastAlert } from '../../../../utils/Alerts.js';
import { useProductsStore, useModalStore } from '../../../../stores';
import { storeToRefs } from 'pinia';
import EditProduct from './EditProduct.vue';

const { GetProduct } = useProductsStore();
const { ActiveProduct, IsEdit, ShowForm } = storeToRefs(useProductsStore());
const props = defineProps({
    params: {}
});

const { params } = props;
const { showModal } = useModalStore();

const AlertaEliminado = () => {
    ToastAlert("success", "El elemento se ha eliminado correctamente.", 5000, "Soluciones Tecnológicas para su Negocio");
};

const callbackEliminado = () => {
    AlertaEliminado();
};

const DeleteItem = () => {
    SimpleAlert("¿Desea eliminar el elemento seleccionado?", "Esta accion no se puede deshacer, confirme que selecciono el elemento correcto.", "warning", "Elminar", callbackEliminado);
};

const setEdit = async () => {
    let idProducto = params.value;
    if (idProducto) {
        IsEdit.value = true;
        await GetProduct(idProducto);
        ShowForm.value = true;
        //let toModal = markRaw(EditProduct);
        //showModal(toModal);
    }
};

</script>

<template>
    <div class="text-center">
        <button class="btn btn-info text-light mr-3" v-on:click="setEdit"><span class="fa fa-edit"></span> Editar</button>
        <!-- <button class="btn btn-danger text-light" @click="DeleteItem"><span class="fa fa-trash"></span></button> -->
    </div>
</template>