
export function setFavoriteRaces (state, { name, url }) {
  state.races.push({ name, url })
}

export function setFavoriteClasses (state, { name, url }) {
  state.classes.push({ name, url })
}

export function setFavoriteEquipments (state, { name, url }) {
  state.equipments.push({ name, url })
}

export function setFavoriteSpells (state, { name, url }) {
  state.spells.push({ name, url })
}

export function setFavoriteMonsters (state, { name, url }) {
  state.monsters.push({ name, url })
}
