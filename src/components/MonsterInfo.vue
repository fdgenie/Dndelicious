<template>
  <div>
    <span v-if="monsterInfo && !loading">
      <div class="row items-center no-wrap  justify-center">
        <div class="col">
          <div class="col text-h6 flex justify-center q-mt-md">
            {{ monsterInfo.name }} info card
          </div>
          <div class="flex justify-center text-subtitle2">
            Challenge Rating {{ monsterInfo.challenge_rating }}
          </div>
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
              <div class="text-h6 text-deep-purple-10">Stats</div>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pb-none">
              <ul style="list-style: none;" class="q-pl-none q-my-none">
                <li class="q-pb-md">Strength: {{ monsterInfo.strength }}</li>
                <li class="q-pb-md">
                  Constitution: {{ monsterInfo.constitution }}
                </li>
                <li class="q-pb-md">Charisma: {{ monsterInfo.charisma }}</li>
                <li class="q-pb-md">Wisdom: {{ monsterInfo.wisdom }}</li>
                <li class="q-pb-md">
                  Intelligence: {{ monsterInfo.intelligence }}
                </li>
                <li class="q-pb-md">Dexterity: {{ monsterInfo.dexterity }}</li>
                <li class="q-pb-md">
                  Hit Points: {{ monsterInfo.hit_points }} or
                  {{ monsterInfo.hit_dice }}
                </li>
                <li class="q-pb-md">
                  Armor Class: {{ monsterInfo.armor_class }}
                </li>
              </ul>
            </q-card-section>
            <q-separator dark />
          </q-card>

          <q-card
            v-if="monsterInfo.languages"
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Laguages</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ monsterInfo.languages }}
            </q-card-section>

            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Alignment</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ monsterInfo.alignment }}
            </q-card-section>

            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Speed</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <ul style="list-style: none;" class="q-pl-none q-ma-none">
                <li
                  v-if="
                    monsterInfo.speed !== undefined
                      ? monsterInfo.speed.swim
                      : ''
                  "
                >
                  Swim: {{ monsterInfo.speed.swim }}
                </li>
                <li
                  v-if="
                    monsterInfo.speed !== undefined
                      ? monsterInfo.speed.walk
                      : ''
                  "
                >
                  Walk: {{ monsterInfo.speed.walk }}
                </li>
                <li
                  v-if="
                    monsterInfo.speed !== undefined ? monsterInfo.speed.fly : ''
                  "
                >
                  Fly: {{ monsterInfo.speed.fly }}
                </li>
              </ul>
            </q-card-section>
            <q-separator dark />
          </q-card>

          <q-card
            v-if="
              monsterInfo.condition_immunities !== undefined
                ? monsterInfo.condition_immunities.length > 0
                : ''
            "
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">
                Condition Immunities
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section
              class="q-pb-sm"
              v-for="(condition_immunity,
              key) in monsterInfo.condition_immunities"
              :key="key"
            >
              {{ condition_immunity.name }}
            </q-card-section>
          </q-card>

          <q-card
            v-if="
              monsterInfo.damage_immunities !== undefined
                ? monsterInfo.damage_immunities.length > 0
                : ''
            "
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Damage Immunities</div>
            </q-card-section>
            <q-separator />
            <q-card-section
              class="q-pb-sm"
              v-for="(damage_immunity, key) in monsterInfo.damage_immunities"
              :key="key"
            >
              {{ damage_immunity }}
            </q-card-section>
          </q-card>

          <q-card
            v-if="
              monsterInfo.damage_resistances !== undefined
                ? monsterInfo.damage_resistances.length > 0
                : ''
            "
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Damage Resistance</div>
            </q-card-section>
            <q-separator />
            <q-card-section
              class="q-pb-sm"
              v-for="(damage_resistance, key) in monsterInfo.damage_resistances"
              :key="key"
            >
              {{ damage_resistance }}
            </q-card-section>
          </q-card>

          <q-card
            v-if="
              monsterInfo.damage_vulnerabilities !== undefined
                ? monsterInfo.damage_vulnerabilities.length > 0
                : ''
            "
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">
                Damage Vulnerability
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section
              class="q-pb-sm"
              v-for="(damage_vulnerability,
              key) in monsterInfo.damage_vulnerabilities"
              :key="key"
            >
              {{ damage_vulnerability }}
            </q-card-section>
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Actions</div>
            </q-card-section>
            <q-separator />
            <q-card-section
              class="q-pb-none"
              v-for="(action, key) in monsterInfo.actions"
              :key="key"
            >
              <ul>
                <li>
                  <div class="text-h6 text-deep-purple-6">
                    {{ action.name }}
                  </div>
                  <div class="text-subtitle2">{{ action.desc }}</div>
                </li>
              </ul>
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
  name: "MonsterInfo",
  props: {
    monsterInfo: {
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

      this.$store.dispatch("user/saveFavoriteMonster", {
        name: this.monsterInfo.index,
        url: this.monsterInfo.url
      });
    }
  }
};
</script>
