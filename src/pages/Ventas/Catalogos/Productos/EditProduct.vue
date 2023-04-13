<script setup>
import { useProductsStore, useModalStore } from '../../../../stores';
import { storeToRefs } from 'pinia';
import { emptyProduct } from '../../../../models/products';
import { CatalogoEstatus, CatalogoImpuestos, CatalogoUnidadMedida, CatalogoMetodoCosteo, CatalogoCategoriaProducto, CatalogoLineaNegocio } from '../../../../models/catalogs';
import { columnApi, gridApi } from '../../../../utils/TableConfig.js';

const { ActiveProduct, IsEdit, Products } = storeToRefs(useProductsStore());
const { Create, Update } = useProductsStore();
const { closeModal } = useModalStore();

const GuardarCambios = async () => {
    if (ActiveProduct.value.idProducto > 0) {
        await Update(ActiveProduct.value);
    } else {
        await Create(ActiveProduct.value);
    }
    var params = {
        force: true,
        suppressFlash: true,
      };
    gridApi.value.refreshCells(params);
    closeModal();
};
</script>

<template>
    <div class="modal-header">
        <h5 class="modal-title">Datos de productos</h5>
    </div>
    <div class="modal-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <label>Nombre</label>
                    <input v-model="ActiveProduct.descripcion" type="text" class="form-control">
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <label>Codigo</label>
                    <input v-if="IsEdit" disabled v-bind:value="ActiveProduct.codigo" type="text" class="form-control disabled">
                    <input v-else v-model="ActiveProduct.codigo" type="text" class="form-control">
                </div>
            </div>
            <div class="row mt-0 mt-md-3">
                <div class="col-lg-3 col-md-6 col-12">
                    <label>Costo</label>
                    <input v-model="ActiveProduct.costo" type="number" class="form-control">
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <label>Precio</label>
                    <input v-model="ActiveProduct.precio" type="number" class="form-control">
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <label>Precio con impuesto</label>
                    <input v-model="ActiveProduct.precioConImpuesto" type="number" class="form-control">
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <label>Margen de ganancia</label>
                    <input v-model="ActiveProduct.margenGanancia" type="number" class="form-control">
                </div>
            </div>
            <div class="row mt-0 mt-md-3">
                <div class="col-lg-3 col-md-6 col-12">
                    <label>Inventariable</label>
                    <select v-model="ActiveProduct.productoInventariable" class="form-control">
                        <option value="true">Si</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <label>Reorden</label>
                    <input v-model="ActiveProduct.reorden" type="number" class="form-control">
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <label>Máximo</label>
                    <input v-model="ActiveProduct.inventarioMaximo" type="number" class="form-control">
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <label>Mínimo</label>
                    <input v-model="ActiveProduct.inventarioMinimo" type="number" class="form-control">
                </div>
            </div>
            <div class="row mt-0 mt-md-3">
                <div class="col-12 col-md-6">
                    <label>Clave producto</label>
                    <input v-model="ActiveProduct.claveProductoServicio" type="text" class="form-control">
                </div>
                <div class="col-12 col-md-6">
                    <label>Clave unidad de medida</label>
                    <input v-model="ActiveProduct.claveUnidadMedida" type="text" class="form-control">
                </div>
            </div>
            <div class="row mt-0 mt-md-3">
                <div class="col-lg-3 col-md-6 col-12">
                    <label>Unidad de medida</label>
                    <select v-model="ActiveProduct.idUnidadMedida" class="form-control">
                        <option :value="o.IdProductoUnidadMedida" v-for="o in CatalogoUnidadMedida">{{ o.Descripcion }}
                        </option>
                    </select>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <label>Metodo de costeo</label>
                    <select v-model="ActiveProduct.idMetodoCosteo" class="form-control">
                        <option :value="o.IdTipoDetalle" v-for="o in CatalogoMetodoCosteo">{{ o.Descripcion }}</option>
                    </select>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <label>Impuesto</label>
                    <select v-model="ActiveProduct.idImpuesto" class="form-control">
                        <option :value="o.IdImpuesto" v-for="o in CatalogoImpuestos">{{ o.Descripcion }}</option>
                    </select>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <label>Categoria</label>
                    <select v-model="ActiveProduct.idCategoria" class="form-control">
                        <option :value="o.IdListaDetalle" v-for="o in CatalogoCategoriaProducto">{{ o.Descripcion }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row mt-0 mt-md-3">
                <div class="col-md-6 col-12">
                    <label>Linea de negocio</label>
                    <select v-model="ActiveProduct.idLineaNegocio" class="form-control">
                        <option :value="o.IdListaDetalle" v-for="o in CatalogoLineaNegocio">{{ o.Descripcion }}</option>
                    </select>
                </div>
                <div class="col-md-6 col-12">
                    <label>Estatus</label>
                    <select v-model="ActiveProduct.idEstatus" class="form-control">
                        <option :value="o.IdEstatus" v-for="o in CatalogoEstatus">{{ o.Descripcion }}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" @click="GuardarCambios">Guardar producto</button>
    </div>
</template>

<style scoped>
.modal-header {
    background: #3f6ad8;
    justify-content: center;
    color: white;
}

.modal-body {
    height: calc(100vh - 200px);
    overflow-x: hidden;
    overflow-y: auto;
}
</style>