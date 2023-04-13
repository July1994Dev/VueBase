import { axiosClient } from "./config";

const GetAllProducts = () => {
  return axiosClient.get(`Producto/GetProdutsAsync`);
};

const GetProduct = (id) => {
  return axiosClient.get(`Producto/Get?IdProducto=${id}`);
};

const GetCodeIncrement = () => {
  return axiosClient.get(`Producto/GetCodeIncrement`);
};

const UpdateProduct = (data) => {
  return axiosClient.put(`Producto/Update`, data);
};

const CreateProduct = (data) => {
  return axiosClient.post(`Producto/Create`, data);
};

export { GetAllProducts, GetProduct, UpdateProduct, CreateProduct, GetCodeIncrement };