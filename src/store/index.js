import { createStore } from "vuex";
import user from "./modules/user";
import userAuth from "./modules/userAuth";

const debug = process.env.NODE_ENV !== "production";

const store = createStore({
  modules: {
    userAuth,
    user
  },
  strict: debug
});

export default store;