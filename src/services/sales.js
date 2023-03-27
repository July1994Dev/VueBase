import { axiosClient } from "./config";

const GetAll = (pageNumber, pageSize) => {
  return axiosClient.get(`Ventas/ListarVentasAsync?pPageIndex=${pageNumber}&pPageSize=${pageSize}`);
};

const Get = (id) => {
  return axiosClient.get(`Departamento/GetList?pIdDepartamento=${id}`);
};

const Create = (data) => {
  return axiosClient.post(`Departamento/Create`, data);
};

const Remove = (id) => {
  return axiosClient.get(`Departamento/Remove?pIdDepartamento=${id}`);
};

export { GetAll, Get, Create, Remove };