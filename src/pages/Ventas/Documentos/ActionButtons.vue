<script setup>
import router from '../../../router/index.js';
import { SimpleAlert, ToastAlert } from '../../../utils/Alerts.js';
import { useSalesStore } from '../../../stores';

const { GetAllSales } = useSalesStore();
const props = defineProps({
    params: {}
});

const { params } = props;

const EditItem = () => {
    router.push({ name: 'EditSale', params: { id: params.value } })
};

const AlertaEliminado = () => {
    ToastAlert("success", "El elemento se ha eliminado correctamente.", 5000, "Soluciones Tecnológicas para su Negocio");
};

const callbackEliminado = () => {
    AlertaEliminado();
};

const DeleteItem = () => {
    SimpleAlert("¿Desea eliminar el elemento seleccionado?", "Esta accion no se puede deshacer, confirme que selecciono el elemento correcto.", "warning", "Elminar", callbackEliminado);
};

</script>

<template>
    <div class="text-center">
        <button class="btn btn-info text-light mr-3" @click="EditItem"><span class="fa fa-edit"></span></button>
        <button class="btn btn-danger text-light" @click="DeleteItem"><span class="fa fa-trash"></span></button>
    </div>
</template>