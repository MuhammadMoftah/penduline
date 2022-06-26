export const state = () => ({
  items: [],
  filteredItems: [],
  item: {},
  meta: {},
});
export const getters = {
  items(state) {
    return state.items;
  },
  itemsQuantity(state) {
    let counter = 0;
    for (let i in state.items) {
      state.items[i]["quantity"]
        ? (counter = counter + state.items[i]["quantity"])
        : (counter = counter + 1);
    }
    return counter;
  },
  subTotal(state) {
    let subTotal = 0;
    for (let i in state.items) {
      subTotal =
        subTotal + state.items[i]["price"] * state.items[i]["quantity"];
    }
    return subTotal;
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
  meta(state, meta) {
    state.meta = meta;
  },
  appendItems(state, items) {
    state.items = state.items.concat(items);
  },
  itemPlus(state, item) {
    const index = state.items.findIndex((x) => x.id == item.id);
    if (state.items[index]["quantity"]) {
      state.items[index]["quantity"]++;
    } else {
      state.items[index]["quantity"] = 2;
    }
  },
  itemMinus(state, item) {
    const index = state.items.findIndex((x) => x.id == item.id);
    if (state.items[index]["quantity"]) {
      state.items[index]["quantity"]--;
    } else {
      state.items[index]["quantity"] = 2;
    }
  },
  deleteItem(state, item) {
    state.items = state.items.filter((el) => el.id != item.id);
  },
};

const url = "";
const includes = "";
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
