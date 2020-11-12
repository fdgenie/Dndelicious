import customAxios from '../../boot/axios.js'

export function setEquipments ({ commit }) {
  commit("loading/setLoading", null, { root: true });

  customAxios.get('equipment').then(function (response) {
    // handle success
    commit('setEquipments', response.data.results)
  }).catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(() => {
    commit("loading/stopLoading", null, { root: true });
  });
}

export function setEquipment ({ commit }, { equipmentName }) {
  commit("loading/setLoading", null, { root: true });

  customAxios.get('equipment/' + equipmentName).then(function (response) {
    // handle success
    console.log(response)
    commit('setEquipment', response.data)
  }).catch(function (error) {
    // handle error
    console.log(error)
  }).finally(() => {
    commit("loading/stopLoading", null, { root: true });
  });
}
