import { axiosClient } from "./config";

const GetAll = () => {
  return axiosClient.get(`Departamento/GetList`);
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