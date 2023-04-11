import { defineStore } from "pinia";
import {
  GetProduct,
  GetAllProducts,
  CreateProduct,
  UpdateProduct,
} from "../services/products.js";
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
      CreateProduct(item)
        .then((result) => {
          this.Products.Results.push(result.data.data);
        })
        .catch((error) => {});
    },
    async Update(item) {
      UpdateProduct(item)
        .then((result) => {
          let product = this.Products.Results.filter(
            (x) => x.idProducto == result.data.data.idProducto
          )[0];
          product.codigo = result.data.data.codigo;
          product.descripcion = result.data.data.descripcion;
          product.idProducto = result.data.data.idProducto;
          product.margenGanancia = result.data.data.margenGanancia;
          product.precio = result.data.data.precio;

          console.log(this.Products.Results);
        })
        .catch((error) => {});
    },
  },
});

export default useProductsStore;
