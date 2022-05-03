import { auth } from "@/firebase";
import router from "@/router"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";




const userAuth = {
  namespaced: true,
  state: () => ({}),
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  getters: {},
  actions: {
    async login({ commit }, details) {
      const { login, password } = details;
      try {
        await signInWithEmailAndPassword(auth, login, password);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }
      commit("user/SET_USER", auth.currentUser, { root: true });
      router.push("/");
    },
    async register({ commit }, details) {
      const { login, password } = details;
      try {
        await createUserWithEmailAndPassword(auth, login, password);
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/operation-not-allowed":
            alert("User not found");
            break;
          case "auth/weak-password":
            alert("Weak password");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }
      commit("user/SET_USER", auth.currentUser, { root: true });
      router.push("/");
    },

    async logout({ commit }) {
      await signOut,
      commit("user/CLEAR_USER", auth.currentUser, { root: true });
      router.push("/login");
    },
    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit("user/CLEAR_USER", null, { root: true });
        } else {
          commit("user/SET_USER", user, { root: true });

          if(router.isReady() && router.currentRoute.value.path === "/login") {
            router.push("/")
          }
        }
      })
    }
  },
};

export default userAuth;
