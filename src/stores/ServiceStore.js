import { defineStore } from "pinia";
import {
  GetServicio,
  GetAllServicios,
  CreateServicio,
  UpdateServicio,
  GetCodeIncrement
} from "../services/service.js";
import { gridApi } from '../utils/TableConfig.js';
import { emptyService } from '../models/services.js'
import { FormatDate } from "../utils/FormatStrings.js";

const useServiciosStore = defineStore({
  id: "Servicios",
  state: () => ({
    Servicios: {
      ActivePage: 1,
      ItemsPerPage: 10,
      Results: [],
    },
    ActiveServicio: {},
    IsEdit: false,
    ShowForm: false
  }),
  actions: {
    async GetAllServicios() {
      GetAllServicios()
        .then((result) => {
          this.Servicios.Results = result.data.data.map((x) => {
            return {
              ...x,
            };
          });
        })
        .catch((error) => {});
    },
    async GetServicio(id) {
      GetServicio(id)
        .then((result) => {
          this.ActiveServicio = result.data.data;
        })
        .catch((error) => {});
    },
    async Create(item) {
      await CreateServicio(item)
        .then((result) => {
          this.Servicios.Results.push(result.data.data);
        })
        .catch((error) => {});
        gridApi.value.setRowData(this.Servicios.Results);

    },
    async GetNewCode(){
      await GetCodeIncrement().then(result => {
        emptyService.codigo = result.data;
      });
    },
    async Update(item) {
      await UpdateServicio(item)
        .then((result) => {
          let Servicio = this.Servicios.Results.filter(
            (x) => x.idServicio == result.data.data.idServicioo
          )[0];
          Servicio.codigo = result.data.data.codigo;
          Servicio.descripcion = result.data.data.descripcion;
          Servicio.idServicioo = result.data.data.idServicioo;
          Servicio.margenGanancia = result.data.data.margenGanancia;
          Servicio.precio = result.data.data.precio;
        })
        .catch((error) => {});
        gridApi.value.setRowData(this.Servicios.Results);

    },
  },
});

export default useServiciosStore;
