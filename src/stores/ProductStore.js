import { defineStore } from "pinia";
import {
  GetProduct,
  GetAllProducts,
  CreateProduct,
  UpdateProduct,
  GetCodeIncrement
} from "../services/products.js";
import { gridApi } from '../utils/TableConfig.js';
import {emptyProduct} from '../models/products.js'
import { FormatDate } from "../utils/FormatStrings.js";

const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    Products: {
      ActivePage: 1,
      ItemsPerPage: 10,
      Results: [],
    },
    ActiveProduct: {},
    IsEdit: false,
    ShowForm: false
  }),
  actions: {
    async GetAllProducts() {
      GetAllProducts()
        .then((result) => {
          this.Products.Results = result.data.data.map((x) => {
            return {
              ...x,
            };
          });
        })
        .catch((error) => {});
    },
    async GetProduct(id) {
      GetProduct(id)
        .then((result) => {
          this.ActiveProduct = result.data.data;
        })
        .catch((error) => {});
    },
    async Create(item) {
      await CreateProduct(item)
        .then((result) => {
          this.Products.Results.push(result.data.data);
        })
        .catch((error) => {});
        gridApi.value.setRowData(this.Products.Results);

    },
    async GetNewCode(){
      await GetCodeIncrement().then(result => {
        emptyProduct.codigo = result.data;
      });
    },
    async Update(item) {
      await UpdateProduct(item)
        .then((result) => {
          let product = this.Products.Results.filter(
            (x) => x.idProducto == result.data.data.idProducto
          )[0];
          product.codigo = result.data.data.codigo;
          product.descripcion = result.data.data.descripcion;
          product.idProducto = result.data.data.idProducto;
          product.margenGanancia = result.data.data.margenGanancia;
          product.precio = result.data.data.precio;
        })
        .catch((error) => {});
        gridApi.value.setRowData(this.Products.Results);

    },
  },
});

export default useProductsStore;
