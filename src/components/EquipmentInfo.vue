<template>
  <div>
    <span v-if="equipment && !loading">
      <div class="row items-center no-wrap  justify-center">
        <div class="col text-h6 flex justify-center q-mt-md">
          {{ equipment.name }} info card
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
          <q-card v-if="equipment.cost" class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Cost</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ equipment.cost.quantity }} {{ equipment.cost.unit }}
            </q-card-section>
            <q-separator dark />
          </q-card>

          <q-card
            v-if="equipment.equipment_category"
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Equipment Category</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ equipment.equipment_category.name }}
            </q-card-section>
            <q-separator dark />
          </q-card>

          <q-card
            v-if="equipment.gear_category"
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Gear Category</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ equipment.gear_category.name }}
            </q-card-section>
            <q-separator dark />
          </q-card>

          <q-card
            v-if="equipment.weight"
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Weight</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ equipment.weight }}
            </q-card-section>
            <q-separator dark />
          </q-card>

          <q-card
            v-if="equipment.vehicle_category"
            class="my-card bg-secondary text-white"
          >
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Vehicle Category</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ equipment.vehicle_category }}
            </q-card-section>
            <q-separator dark />
          </q-card>

          <q-card v-if="equipment.desc" class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6 text-deep-purple-10">Description</div>
            </q-card-section>
            <q-separator />
            <q-card-section
              class="q-pb-sm"
              v-for="(description, key) in equipment.desc"
              :key="key"
            >
              {{ description }}
            </q-card-section>
            <q-separator dark />
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
  name: "EquipmentInfo",
  props: {
    equipment: {
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

      this.$store.dispatch("user/saveFavoriteEquipment", {
        name: this.equipment.index,
        url: this.equipment.url
      });
    }
  }
};
</script>
