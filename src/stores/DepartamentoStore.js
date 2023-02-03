import { defineStore } from "pinia";
import router from "../router/index.js";
import { Get, GetAll, Create, Remove } from "../services/departamentos.js";

const useDepartamentoStore = defineStore({
  id: "departamento",
  state: () => ({
    Departamentos: [],
  }),
  actions: {
    GetDepartamentos() {
      GetAll()
        .then((result) => {
          this.Departamentos = result.data.data;
          console.log(this.Departamentos);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    UpdateDepartamento(departamento) {
      departamento.descripcion = departamento.descripcion.toUpperCase();
      Create(departamento)
        .then((result) => {
          this.GetAll();
          router.push({ name: "Departamentos" });
        })
        .catch((error) => {
          alert("Error");
        });
    },
    GetDepartamento(id) {
      return this.Departamentos.filter((x) => x.idDepartamento == id)[0];
    },
    EliminarDepartament(id, callback) {
      let position = this.Departamentos.indexOf(
        this.Departamentos.filter((x) => x.idDepartamento == id)[0]
      );
      this.Departamentos.splice(position, 1);
      console.log(this.Departamentos);
      return;
      Remove(id)
        .then((result) => {
          let position = this.Departamentos.indexOf(
            this.Departamentos.filter((x) => x.idDepartamento == id)[0]
          );
          if (callback) {
            callback();
          }
        })
        .catch((error) => {
          alert("Error");
        });
    },
  },
});

export default useDepartamentoStore;
