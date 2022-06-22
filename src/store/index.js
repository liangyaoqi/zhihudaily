import Vue from "vue";
import Vuex from "vuex";
import collectionApi from "../api/collection";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ids: [],
    collections: [],
  },
  getters: {},
  mutations: {
    //将收藏的id放进数组
    addId(state, id) {
      // console.log(id);
      if (state.ids.length > 0) {
        state.ids.map((x) => {
          if (x != id) {
            state.ids.push(id);
          }
        });
      } else {
        state.ids.push(id);
      }
    },
    //根据id数组获取所有收藏的内容
    getCollection(state) {
      state.ids.map(async (x) => {
        let data = await collectionApi.collectionData(x);
        state.collections.push(data.data.story);
        // console.log(state.collections);
      });
    },
    //删除重复id
    deleteId(state, id) {
      state.ids.map((x, index) => {
        if (x == id) {
          state.ids.splice(index, 1);
        }
      });
      console.log(state.ids);
    },
    /* //删除重复收藏数组
    deleteCollections(state) {
      if (state.collections.length == 0) {
        return;
      }
      state.collections.map((x, index) => {
        state.collections.map((y) => {
          if (x.id == y.id) {
            state.collections.splice(index, 1);
          }
        });
      });
      console.log(state.ids);
    }, */
    //清空收藏数组
    clearAll(state) {
      state.collections = [];
    },
  },
  actions: {},
  modules: {},
});
