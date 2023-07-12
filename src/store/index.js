import { createStore } from 'vuex';
import coachModule from './coach/index.js';
import requestModule from './request/index.js';
const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestModule,
  },
});
export default store;
