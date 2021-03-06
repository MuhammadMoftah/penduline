export const state = () => ({
  items: [],
  filteredItems: [],
  item: null,
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
    state.item = item;
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

const url = "addresses";
const includes = "city,district";
export const actions = {
  async getItems({ commit }, page = 1) {
    const res = this.$axios
      .$get(`/${url}?per_page=${100}&page=${page}&include=${includes}`)
      .then((res) => {
        if (page !== 1) {
          commit("appendItems", res.data);
        } else {
          commit("items", res.data);
        }
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
