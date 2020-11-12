import customAxios from '../../boot/axios.js'

export function setSpells ({ commit }) {
  commit("loading/setLoading", null, { root: true });
  
  customAxios.get('spells').then(function (response) {
    // handle success
    commit('setSpells', response.data.results)
  }).catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(() => {
    commit("loading/stopLoading", null, { root: true });
  });
}

export function setSpell ({ commit }, { spellSpec }) {
  commit("loading/setLoading", null, { root: true });

  customAxios.get('spells/' + spellSpec).then(function (response) {
    // handle success
    commit('setSpell', response.data)
  }).catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(() => {
    commit("loading/stopLoading", null, { root: true });
  });
}
