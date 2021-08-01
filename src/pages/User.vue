<template>
  <div class="q-pa-md">
    <div class="flex justify-center text-h5 text-weight-bold">Welcome User</div>
    <div class="flex justify-center text-subtitle2">Here you can see all your favorites choices</div>

    <q-card flat bordered class="my-card bg-grey-1 q-ma-md">

      <q-card-section class="q-pa-md row items-start q-gutter-md">

        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">Races</div>
          </q-card-section>
            <q-separator />
          <q-card-section  v-for="(race, key) in races" :key="key">
            <q-btn flat :to=" '/' + race.url.replace('/api/', '')">
              {{ race.name }}
            </q-btn>
          </q-card-section>
        </q-card>

        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">Classes</div>
          </q-card-section>
            <q-separator />
          <q-card-section  v-for="(clas, key) in classes" :key="key">
            <q-btn flat :to=" '/' + clas.url.replace('/api/', '')">
              {{ clas.name }}
            </q-btn>
          </q-card-section>
        </q-card>

        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">Equipments</div>
          </q-card-section>
            <q-separator />
          <q-card-section  v-for="(equipment, key) in equipments" :key="key">
            <q-btn flat :to=" '/' + equipment.url.replace('/api/', '')">
              {{ equipment.name }}
            </q-btn>
          </q-card-section>
        </q-card>

        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">Spells</div>
          </q-card-section>
            <q-separator />
          <q-card-section  v-for="(spell, key) in spells" :key="key">
            <q-btn flat :to=" '/' + spell.url.replace('/api/', '')">
              {{ spell.name }}
            </q-btn>
          </q-card-section>
        </q-card>

        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">Monsters</div>
          </q-card-section>
            <q-separator />
          <q-card-section  v-for="(monster, key) in monsters" :key="key">
            <q-btn flat :to=" '/' + monster.url.replace('/api/', '')">
              {{ monster.name }}
            </q-btn>
          </q-card-section>
        </q-card>

      </q-card-section>

    </q-card>

  </div>
</template>

<script>
export default {
  name: 'user',
  computed: {
    races () {
      return this.$store.getters['user/getFavoriteRaces']
    },
    classes () {
      return this.$store.getters['user/getFavoriteClasses']
    },
    equipments () {
      return this.$store.getters['user/getFavoriteEquipments']
    },
    spells () {
      return this.$store.getters['user/getFavoriteSpells']
    },
    monsters () {
      return this.$store.getters['user/getFavoriteMonsters']
    }
  }
}
</script>
