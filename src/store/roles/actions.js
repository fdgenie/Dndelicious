import customAxios from '../../boot/axios.js'

export function setClasses ({ commit }) {
  commit("loading/setLoading", null, { root: true });

  customAxios.get('classes').then(function (response) {
    // handle success
    commit('setClasses', response.data.results)
  }).catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(() => {
    commit("loading/stopLoading", null, { root: true });
  });
}

export function setClass ({ commit }, { classSpec }) {
  commit("loading/setLoading", null, { root: true });

  customAxios.get('classes/' + classSpec).then(function (response) {
    // handle success
    commit('setClass', response.data)
  }).catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(() => {
    commit("loading/stopLoading", null, { root: true });
  });
}
