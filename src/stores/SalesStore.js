import { defineStore } from "pinia";
import router from "../router/index.js";
import { Get, GetAll, Create, Remove } from "../services/sales.js";
import { FormatDate } from "../utils/FormatStrings.js";

const useSalesStore = defineStore({
  id: "sales",
  state: () => ({
    Sales: {
      ActivePage: 1,
      ItemsPerPage: 10,
      Results: []
    },
  }),
  actions: {
    GetAllSales() {
      GetAll(this.Sales.ActivePage, this.Sales.ItemsPerPage)
        .then((result) => {
          this.Sales.Results = result.data.data.map(x=>{
            return {
              ...x,
              fechaCorrecta: FormatDate(x.fecha)
            }
          });
          console.log(this.Sales.Results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
});

export default useSalesStore;
