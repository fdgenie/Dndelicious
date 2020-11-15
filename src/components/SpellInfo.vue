<template>
  <div>
    <span v-if="spellInfo && !loading">
      <div class="row items-center no-wrap  justify-center">
        <div class="col">
          <div class="col text-h6 flex justify-center q-mt-md">
            {{ spellInfo.name }} info card
          </div>
          <div class="flex justify-center text-subtitle2">
            Spell level {{ spellInfo.level }}
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
              <div class="text-h6">Casting Time</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ spellInfo.casting_time }}
            </q-card-section>

            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6">Classes</div>
            </q-card-section>
            <q-separator />
            <q-card-section v-for="(clas, key) in spellInfo.classes" :key="key">
              <q-btn :to="'/' + clas.url.replace('/api/', '')">
                {{ clas.name }}
              </q-btn>
            </q-card-section>
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6">Duration</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ spellInfo.duration }}
            </q-card-section>

            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6">Range</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ spellInfo.range }}
            </q-card-section>

            <q-separator dark />
          </q-card>

          <q-card
            v-if="spellInfo.material"
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6">Material</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ spellInfo.material }}
            </q-card-section>

            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6">Ritual</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{
                spellInfo.ritual
                  ? "It require ritual"
                  : "It doesnt require ritual"
              }}
            </q-card-section>

            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6">Concetration</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{
                spellInfo.concetration
                  ? "It require concetration"
                  : "It doesnt require concetration"
              }}
            </q-card-section>

            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6">School of magic</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ spellInfo.school !== undefined ? spellInfo.school.name : "" }}
            </q-card-section>

            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6">Description</div>
            </q-card-section>
            <q-separator />
            <q-card-section
              v-for="(description, key) in spellInfo.desc"
              :key="key"
            >
              <ul>
                <li>{{ description }}</li>
              </ul>
            </q-card-section>
          </q-card>

          <q-card
            v-if="spellInfo.higher_level"
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6">Higher level</div>
            </q-card-section>
            <q-separator />
            <q-card-section
              v-for="(moreLevel, key) in spellInfo.higher_level"
              :key="key"
            >
              <ul>
                <li>{{ moreLevel }}</li>
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
  name: "SpellInfo",
  props: {
    spellInfo: {
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

      this.$store.dispatch("user/saveFavoriteSpell", {
        name: this.spellInfo.index,
        url: this.spellInfo.url
      });
    }
  }
};
</script>
