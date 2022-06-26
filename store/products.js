export const state = () => ({
  items: [],
  filteredItems: [],
  filterSidebar: false,
  item: {},
  meta: {},
});
export const getters = {
  items(state) {
    return state.items;
  },
  item(state) {
    return state.item;
  },
  meta(state) {
    return state.meta;
  },
};
export const mutations = {
  items(state, items) {
    state.items = items;
  },
  item(state, item) {
    state.items.splice(
      state.items.findIndex((s) => s.id === item.id),
      1,
      item
    );
  },
  filterSidebar(state, payload) {
    state.filterSidebar = payload;
  },
  meta(state, meta) {
    state.meta = meta;
  },
  appendItems(state, items) {
    state.items = state.items.concat(items);
  },
  deleteItem(state, id) {
    state.items = state.items.filter((el) => el.id != id);
    state.meta.total--;
  },
};

const url = "products";
const includes = "ingredients,categories";
export const actions = {
  async getItems({ commit }, payload) {
    let query = payload.query || {}; // query
    const queryString = Object.entries(query)
      .map((key) => key[0] + "=" + key[1])
      .join("&");
    const res = this.$axios
      .$get(`/${url}?per_page=50&include=${includes}&${queryString}`)
      .then((res) => {
        commit("items", res.data);

        commit("meta", res.meta);
      });

    return res;
  },
  async getItem({ commit, state }, itemID) {
    const { data: item } = await this.$axios.$get(
      `/${url}/${itemID}&include=${includes}`
    );
    commit("item", item);
  },
};
