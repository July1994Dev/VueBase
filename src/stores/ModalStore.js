import { defineStore } from "pinia";
import { markRaw } from "vue";
import {JQJuly} from '../utils/ExternalVariables.js';
const useModalStore = defineStore({
  id: "modal",
  state: () => ({
    Show: false,
    Content: null,
    HasHeader:true,
    HasFooter: true
  }),
  actions: {
    showModal(component) {
      this.Content = component;
      this.Show = true;
      JQJuly.exec("#ModalComponent").modal({
        backdrop: 'static',
      });

    },
    closeModal() {
      this.Show = false;
      JQJuly.exec("#ModalComponent").modal('hide');

    },
  },
});

export default useModalStore;