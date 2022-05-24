export const state = () => ({
  modal: "",
  mobileNav: false,
  activeFilter: "",
  filterLink: "",
});

export const mutations = {
  modal(state, payload) {
    state.modal = payload;
  },
  closeModal(state) {
    state.modal = "";
  },
  openMobileNav(state) {
    state.mobileNav = true;
  },
  closeMobileNav(state) {
    state.mobileNav = "";
  },
  activeFilter(state, payload) {
    state.activeFilter = payload;
  },
  filterLink(state, payload) {
    state.filterLink = payload;
  },
};
export const actions = {};
