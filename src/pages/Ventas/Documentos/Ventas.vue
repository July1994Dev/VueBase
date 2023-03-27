<script>
import ContentHeader from '../../../components/Header/ContentHeader.vue';
import { ref, onMounted, reactive } from 'vue';
import { defaultColDef, gridOptions } from '../../../utils/TableConfig.js';
import { CardComponent, CardHeaderComponent, CardBodyComponent } from '../../../components/UI/Card';
import { AgGridVue } from "ag-grid-vue3";
import { storeToRefs } from 'pinia';
import { useSalesStore } from '../../../stores';
import ActionButtons from './ActionButtons.vue';

export default {
    components: {
        ActionButtons,
        "ag-grid-vue": AgGridVue,
        ContentHeader,
        CardComponent, CardHeaderComponent, CardBodyComponent
    },
    setup(props) {
        const { GetAllSales } = useSalesStore();
        const { Sales } = storeToRefs(useSalesStore());
 
        const columnDefs = [
            { headerName: "Folio", field: "folio" },
            { headerName: "Fecha", field: "fechaCorrecta" },
            { headerName: "Cliente", field: "cliente" },
            { headerName: "Concepto", field: "concepto" },
            { headerName: "Total", field: "total" },
            {
                headerName: 'Acciones',
                cellRenderer: 'ActionButtons',
                field: 'idDocumento'
            }
        ];

        onMounted(() => {
            GetAllSales();
        });

        return {
            Sales, columnDefs, defaultColDef, gridOptions
        };
    },
}
</script>

<template>
    <ContentHeader class="animate__animated animate__fadeIn animate__repeat-2">
        <template v-slot:Icon>
            <i class="pe-7s-cash icon-gradient bg-mean-fruit"></i>
        </template>
        <template v-slot:Title>
            Ventas
        </template>
        <template v-slot:Description>
            En este modulo se pueden visualizar todas las ventas registradas en la plataforma.
        </template>
    </ContentHeader>
    <CardComponent>
        <template v-slot:CardHeader>
            <CardHeaderComponent>
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i class="header-icon lnr-tag icon-gradient bg-happy-itmeo"></i>
                    Ventas
                </div>
            </CardHeaderComponent>
        </template>
        <template v-slot:CardBody>
            <CardBodyComponent>
                <div class="row p-3">
                    <div class="col">
                        <ag-grid-vue class="ag-theme-alpine" :rowData="Sales.Results" :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef" :gridOptions="gridOptions">
                        </ag-grid-vue>
                    </div>
                </div>
            </CardBodyComponent>
        </template>
    </CardComponent>
</template>