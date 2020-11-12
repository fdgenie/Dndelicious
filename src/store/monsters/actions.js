import customAxios from '../../boot/axios.js'

export function setMonsters ({ commit }) {
  commit("loading/setLoading", null, { root: true });
  
  customAxios.get('monsters').then(function (response) {
    // handle success
    commit('setMonsters', response.data.results)
  }).catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(() => {
    commit("loading/stopLoading", null, { root: true });
  });
}

export function setMonster ({ commit }, { monsterName }) {
  commit("loading/setLoading", null, { root: true });

  customAxios.get('monsters/' + monsterName).then(function (response) {
    // handle success
    commit('setMonster', response.data)
  }).catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(() => {
    commit("loading/stopLoading", null, { root: true });
  });
}
