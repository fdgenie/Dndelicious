<template>
  <div>
    <span v-if="items && items.length > 0 && !loading">
      <div class="flex justify-center text-h5 text-weight-bold">
        {{ section }} Section
      </div>
      <div class="flex justify-center text-subtitle2">
        Choose one {{ section.toLocaleLowerCase() }} below to see informations
      </div>
      <q-input bottom-slots v-model="search" placeholder="Search" dense>
        <template v-slot:append>
          <q-icon
            v-if="search !== ''"
            name="close"
            @click="search = ''"
            class="cursor-pointer"
          />
        </template>
      </q-input>
      <q-list separator bordered>
        <q-item
          v-for="item in filteredItems"
          :key="item.id"
          clickable
          v-ripple
          :to="$route.path + '/' + item.index"
        >
          <q-item-section>{{ item.name }}</q-item-section>
        </q-item>
      </q-list>
    </span>
    <span v-else>
      <q-icon name="mdi-loading mdi-spin" class="q-mr-sm" />
      Loading...
    </span>
  </div>
</template>

<script>
import { filter } from "ramda";

export default {
  name: "GeneralMenu",
  props: {
    items: {
      type: Array,
      required: true
    },
    section: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filteredItems() {
      return filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      }, this.items);
    }
  }
};
</script>
