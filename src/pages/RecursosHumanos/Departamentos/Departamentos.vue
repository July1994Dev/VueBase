<script>
import ContentHeader from '../../../components/Header/ContentHeader.vue';
import { ref, onMounted, reactive } from 'vue';
import { defaultColDef, gridOptions } from '../../../utils/TableConfig.js';
import { CardComponent, CardHeaderComponent, CardBodyComponent } from '../../../components/UI/Card';
import ActionButtons from './ActionButtons.vue';
import { AgGridVue } from "ag-grid-vue3";
import { storeToRefs } from 'pinia';
import { useDepartamentoStore } from '../../../stores';

export default {
    components: {
        ActionButtons,
        "ag-grid-vue": AgGridVue,
        ContentHeader,
        CardComponent, CardHeaderComponent, CardBodyComponent
    },
    setup(props) {
        const { GetDepartamentos } = useDepartamentoStore();
        const { Departamentos } = storeToRefs(useDepartamentoStore());
        const columnDefs = [
            { headerName: "Código", field: "codigo" },
            { headerName: "Descripcion", field: "descripcion" },
            {
                headerName: 'Acciones',
                cellRenderer: 'ActionButtons',
                field: 'idDepartamento',
            }
        ];

        onMounted(() => {
            GetDepartamentos();
        });

        return {
            Departamentos, columnDefs, defaultColDef, gridOptions
        };
    },
}
</script>
<template>
    <ContentHeader class="animate__animated animate__fadeIn animate__repeat-2">
        <template v-slot:Icon>
            <i class="pe-7s-plugin icon-gradient bg-mean-fruit"></i>
        </template>
        <template v-slot:Title>
            Departamentos
        </template>
        <template v-slot:Description>
            En este modulo se pueden visualizar todos los departamentos registrados en la plataforma.
        </template>
    </ContentHeader>
    <CardComponent>
        <template v-slot:CardHeader>
            <CardHeaderComponent>
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i class="header-icon lnr-apartment icon-gradient bg-happy-itmeo"></i>
                    Departamentos
                </div>
            </CardHeaderComponent>
        </template>
        <template v-slot:CardBody>
            <CardBodyComponent>
                <div class="row p-3">
                    <div class="col">
                        <ag-grid-vue class="ag-theme-alpine" :rowData="Departamentos" :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef" :gridOptions="gridOptions">
                        </ag-grid-vue>
                    </div>
                </div>
            </CardBodyComponent>
        </template>
    </CardComponent>
</template>