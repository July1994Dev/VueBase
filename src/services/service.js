import { axiosClient } from "./config";

const GetAllServicios = () => {
  return axiosClient.get(`Servicio/GetAllAsync`);
};

const GetServicio = (id) => {
  return axiosClient.get(`Servicio/Get?IdServicio=${id}`);
};

const GetCodeIncrement = () => {
  return axiosClient.get(`Servicio/GetCodeIncrement`);
};

const UpdateServicio = (data) => {
  return axiosClient.put(`Servicio/Update`, data);
};

const CreateServicio = (data) => {
  return axiosClient.post(`Servicio/Create`, data);
};

export { GetAllServicios, GetServicio, UpdateServicio, CreateServicio, GetCodeIncrement };