// import customAxios from '../../boot/axios.js'

export function saveFavoriteRace ({ commit }, { name, url }) {
  commit('setFavoriteRaces', { name, url })
}

export function saveFavoriteClass ({ commit }, { name, url }) {
  commit('setFavoriteClasses', { name, url })
}

export function saveFavoriteEquipment ({ commit }, { name, url }) {
  commit('setFavoriteEquipments', { name, url })
}

export function saveFavoriteSpell ({ commit }, { name, url }) {
  commit('setFavoriteSpells', { name, url })
}

export function saveFavoriteMonster ({ commit }, { name, url }) {
  commit('setFavoriteMonsters', { name, url })
}
