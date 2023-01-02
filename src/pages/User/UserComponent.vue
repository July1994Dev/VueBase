<script setup>
import { CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent } from '../../components/UI/Card';
import { AgGridVue } from "ag-grid-vue3";
import { GetAll } from '../../services/account.js';
import { ref, onMounted, reactive } from 'vue';
import { defaultColDef, gridOptions } from '../../utils/TableConfig.js';
const userData = reactive([]);
const isLoaded = ref(false);

const columnDefs = [
    { headerName: "CLABE", field: "clabeInterbancaria" },
    { headerName: "Código", field: "codigo" },
    { headerName: "No. Cuenta", field: "numeroCuenta" }
];

onMounted(() => {
    GetAll().then(response => {
        isLoaded.value = true;
        userData.value = response.data.data;
    });
});

</script>

<template>
    <CardComponent>
        <template v-slot:CardHeader>
            <CardHeaderComponent>
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i class="header-icon lnr-users icon-gradient bg-happy-itmeo"></i>
                    Usuarios
                </div>
            </CardHeaderComponent>
        </template>
        <template v-slot:CardBody>
            <CardBodyComponent>
                <div class="row p-3">
                    <div class="col">
                        <ag-grid-vue class="ag-theme-alpine" :rowData="userData.value" :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef" :gridOptions="gridOptions"></ag-grid-vue>
                    </div>
                </div>
            </CardBodyComponent>
        </template>
        <template v-slot:CardFooter>
            <CardFooterComponent>
                <div class="row p-3">

                </div>
            </CardFooterComponent>
        </template>
    </CardComponent>
</template>