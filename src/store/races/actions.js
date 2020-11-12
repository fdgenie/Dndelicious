import customAxios from "../../boot/axios.js";

export function setRaces({ commit }) {
  commit("loading/setLoading", null, { root: true });

  customAxios
    .get("races")
    .then(function(response) {
      // handle success
      commit("setRaces", response.data.results);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(() => {
      commit("loading/stopLoading", null, { root: true });
    });
}

export function setRace({ commit }, { raceName }) {
  commit("loading/setLoading", null, { root: true });

  customAxios
    .get('races/' + raceName)
    .then(function(response) {
      // handle success
      commit("setRace", response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(() => {
      commit("loading/stopLoading", null, { root: true });
    });;
}
