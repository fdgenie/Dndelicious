import Vue from "vue";
import Vuex from "vuex";

import races from "./races";
import roles from "./roles";
import equipments from "./equipments";
import monsters from "./monsters";
import spells from "./spells";
import loading from "./loading";
import user from "./user";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      races,
      roles,
      equipments,
      monsters,
      spells,
      loading,
      user
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  });

  return Store;
}
