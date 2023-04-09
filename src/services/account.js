import { axiosClient } from "./config";

const Login = (data) =>{
  return axiosClient.post(`Login/IniciarSesion`, data); 
};

const GetAll = () => {
  return axiosClient.get(`CuentaBancaria/GetAll`);
};

export { Login, GetAll };
