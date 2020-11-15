<template>
  <div>
    <span v-if="race && !loading">
      <div class="row items-center no-wrap  justify-center">
        <div class="col text-h6 flex justify-center q-mt-md">
          {{ race.name }} info card
        </div>
        <div class="q-mr-md">
          <!-- <q-btn
            ripple
            color="red-7"
            round
            flat
            :icon="!btnHover ? 'mdi-heart-outline' : 'mdi-heart'"
            @click="saveToFavorites"
            @mouseenter="btnHover = true"
            @mouseleave="btnHover = false"
          /> -->
        </div>
      </div>

      <q-card flat bordered class="my-card bg-grey-1 q-ma-md">
        <q-card-section class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Age</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ race.age }}
            </q-card-section>
            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Alignment</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ race.alignment }}
            </q-card-section>
            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Languages</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ race.language_desc }}
            </q-card-section>
            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Size Description</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ race.size_description }}
            </q-card-section>
            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Speed</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ race.speed }}
            </q-card-section>
            <q-separator dark />
          </q-card>

          <q-card
            v-if="
              race.ability_bonuses !== undefined
                ? race.ability_bonuses.length > 0
                : ''
            "
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Ability Bonuses</div>
            </q-card-section>
            <q-separator />
            <q-card-section
              class="q-pb-sm"
              v-for="(ability_bonus, key) in race.ability_bonuses"
              :key="key"
            >
              <ul style="list-style: none;" class="q-pl-none q-ma-none">
                <li>Attribute: {{ ability_bonus.name }}</li>
                <li>Bonus: {{ ability_bonus.bonus }}</li>
              </ul>
            </q-card-section>
          </q-card>

          <q-card
            v-if="
              race.starting_proficiencies !== undefined
                ? race.starting_proficiencies.length > 0
                : ''
            "
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">
                Starting Proficiencies
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section
              class="q-pb-sm"
              v-for="(starting_proficiency, key) in race.starting_proficiencies"
              :key="key + 'starting_proficiency'"
            >
              {{ starting_proficiency.name }}
            </q-card-section>

            <span v-if="race.starting_proficiency_options">
              <div class="text-h6 text-subtitle2 text-deep-purple-7 q-pl-sm">
                Choose {{ race.starting_proficiency_options.choose }} from below
              </div>

              <q-card-section
                class="q-pb-sm"
                v-for="(starting_proficiency_option, key) in race
                  .starting_proficiency_options.from"
                :key="key + 'starting_proficiency_option'"
              >
                <ul class="q-pl-sm q-ma-none">
                  <li>{{ starting_proficiency_option.name }}</li>
                </ul>
              </q-card-section>
            </span>
          </q-card>

          <q-card
            v-if="race.subraces !== undefined ? race.subraces.length > 0 : ''"
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Subraces</div>
            </q-card-section>
            <q-separator />
            <q-card-section
              class="q-pb-sm"
              v-for="(subrace, key) in race.subraces"
              :key="key"
            >
              {{ subrace.name }}
            </q-card-section>
          </q-card>

          <q-card
            v-if="race.traits !== undefined ? race.traits.length > 0 : ''"
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Traits</div>
            </q-card-section>
            <q-separator />
            <q-card-section
              class="q-pb-sm"
              v-for="(trait, key) in race.traits"
              :key="key"
            >
              {{ trait.name }}
            </q-card-section>
          </q-card>
        </q-card-section>

        <q-separator />
      </q-card>
    </span>
    <span v-else>
      <q-icon name="mdi-loading mdi-spin" class="q-mr-sm" />
      Loading...
    </span>
  </div>
</template>

<script>
export default {
  name: "RaceInfo",
  props: {
    race: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      btnHover: false
    };
  },
  methods: {
    saveToFavorites() {
      this.$q.notify({
        message: "Saved To Favorites",
        color: "purple",
        position: "top-right"
      });

      this.$store.dispatch("user/saveFavoriteRace", {
        name: this.race.index,
        url: this.race.url
      });
    }
  }
};
</script>
