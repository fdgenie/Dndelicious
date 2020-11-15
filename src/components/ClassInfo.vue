<template>
  <div>
    <span v-if="classHero && !loading">
      <div class="row items-center no-wrap  justify-center">
        <div class="col text-h6 flex justify-center q-mt-md">
          {{ classHero.name }} info card
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
              <div class="text-h6">Hit Die</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ classHero.hit_die }}
            </q-card-section>

            <q-separator dark />
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6">Gear Proficiency</div>
            </q-card-section>
            <q-separator />
            <q-card-section
              v-for="(proficiency, key) in classHero.proficiencies"
              :key="key"
            >
              {{ proficiency.name }}
            </q-card-section>
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6">Saving Throws</div>
            </q-card-section>
            <q-separator />
            <q-card-section
              v-for="(saving_throw, key) in classHero.saving_throws"
              :key="key"
            >
              {{ saving_throw.name }}
            </q-card-section>
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6">Subclasses</div>
            </q-card-section>
            <q-separator />
            <q-card-section
              v-for="(subclass, key) in classHero.subclasses"
              :key="key"
            >
              {{ subclass.name }}
            </q-card-section>
          </q-card>

          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6">Skills</div>
              <div class="text-subtitle2">
                You can choose
                {{
                  classHero.proficiency_choices !== undefined
                    ? classHero.proficiency_choices[0].choose
                    : ""
                }}
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section
              v-for="(skill, key) in classHero.proficiency_choices !== undefined
                ? classHero.proficiency_choices[0].from
                : ''"
              :key="key"
            >
              {{ skill.name }}
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
  name: "ClassInfo",
  props: {
    classHero: {
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

      this.$store.dispatch("user/saveFavoriteClass", {
        name: this.classHero.index,
        url: this.classHero.url
      });
    }
  }
};
</script>
