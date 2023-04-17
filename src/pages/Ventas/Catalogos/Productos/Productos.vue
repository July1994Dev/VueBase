<script>
import ContentHeader from '../../../../components/Header/ContentHeader.vue';
import { onMounted, markRaw, ref } from 'vue';
import { defaultColDef, gridOptions } from '../../../../utils/TableConfig.js';
import { CardComponent, CardHeaderComponent, CardBodyComponent } from '../../../../components/UI/Card';
import { AgGridVue } from "ag-grid-vue3";
import { storeToRefs } from 'pinia';
import { useProductsStore, useModalStore } from '../../../../stores';
import ActionButtons from './ActionButtons.vue';
import EditProduct from './EditProduct.vue';
import ModalComponent from '../../../../components/UI/Modal/ModalComponent.vue';
import { emptyProduct } from '../../../../models/products';
import { gridApi } from '../../../../utils/TableConfig.js';
import Swal from 'sweetalert2';
export default {
    components: {
        ActionButtons,
        "ag-grid-vue": AgGridVue,
        ContentHeader,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        EditProduct,
        ModalComponent
    },
    setup(props) {
        const { GetAllProducts, GetNewCode } = useProductsStore();
        const { Products, IsEdit, ActiveProduct, ShowForm } = storeToRefs(useProductsStore());
        const { showModal } = useModalStore();

        const columnDefs = [
            { headerName: "Codigo", field: "codigo" },
            { headerName: "Descripcion", field: "descripcion" },
            { headerName: "Precio", field: "precio" },
            {
                headerName: 'Acciones',
                cellRenderer: 'ActionButtons',
                field: 'idProducto'
            }
        ];

        const AddItem = async () => {
            let toModal = markRaw(EditProduct);
            IsEdit.value = false;
            await GetNewCode();
            ActiveProduct.value = { ...emptyProduct };
            ShowForm.value=true;
            //showModal(toModal);
        };

        const onGridReady = (params) => {
            gridApi.value = params.api;
        };

        onMounted(() => {
            GetAllProducts();
        });

        return {
            Products, columnDefs, defaultColDef, gridOptions, IsEdit, AddItem, onGridReady,ShowForm
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
            <div v-on:click="EditItem">Productos</div>
        </template>
        <template v-slot:Description>
            En este modulo se pueden visualizar todos los productos registrados en la plataforma.
        </template>
        <template v-slot:Controls>
            <div class="page-title-actions" v-if="!ShowForm">
                <button @click="AddItem" type="button" data-toggle="tooltip" title="" data-placement="bottom"
                    class="btn-shadow mr-3 btn btn-dark">
                    <i class="fa fa-plus"></i>
                    Agregar producto
                </button>
            </div>
        </template>
    </ContentHeader>
    <CardComponent>
        <template v-slot:CardHeader>
            <CardHeaderComponent>
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i class="header-icon lnr-tag icon-gradient bg-happy-itmeo"></i>
                    <div>Productos</div>
                </div>
            </CardHeaderComponent>
        </template>
        <template v-slot:CardBody>
            <CardBodyComponent>
                <div class="row p-3">
                    <div class="col" v-show="ShowForm">
                        <EditProduct></EditProduct>
                    </div>
                    <div v-show="!ShowForm" class="col">
                        <ag-grid-vue class="ag-theme-alpine" :rowData="Products.Results" :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef" :gridOptions="gridOptions" @grid-ready="onGridReady" ref="agGrid">
                        </ag-grid-vue>
                    </div>
                </div>
            </CardBodyComponent>
        </template>
    </CardComponent>
</template>