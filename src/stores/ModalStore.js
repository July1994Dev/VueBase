import { defineStore } from "pinia";

const useModalStore = defineStore({
  id: "modal",
  state: () => ({
    Show: false,
    Content: null
  }),
  actions: {
    showModal(component) {
      this.Content = component;
      this.Show = true;
    },
    closeModal() {},
  },
});

export default useModalStore;
