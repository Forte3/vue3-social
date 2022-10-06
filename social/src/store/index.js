import { createStore } from 'vuex'

import { user } from './user';
import { post } from './post';
import { comment } from './comment';

export const store = createStore({
  modules: {
    user,
    post,
    comment,
  },
  state() {
    return {
      // 显示上传图片的对话框
      showPostUpload: false,
    }
  },
  mutations: {
    changeShowPostUpload(state, show) {
      state.showPostUpload = show;
    }
  },
  actions: {},
})