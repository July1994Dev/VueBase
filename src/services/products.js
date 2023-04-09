import { axiosClient } from "./config";

const GetAllProducts = () => {
  return axiosClient.get(`Producto/GetProdutsAsync`);
};

const GetProduct = (id) => {
  return axiosClient.get(`Producto/Get?IdProducto=${id}`);
};

const UpdateProduct = (data) => {
  return axiosClient.post(`Producto/Update`, data);
};

const CreateProduct = (data) => {
  return axiosClient.post(`Producto/Create`, data);
};

export { GetAllProducts, GetProduct, UpdateProduct, CreateProduct };