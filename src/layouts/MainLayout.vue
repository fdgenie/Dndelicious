<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary glossy   text-white">
      <q-toolbar>
        <q-btn
          class="gt-sm"
          flat
          dense
          round
          @click="miniOpen = !miniOpen"
          icon="mdi-menu"
          aria-label="Menu"
        />
        <q-btn
          class="lt-md"
          dense
          flat
          round
          icon="menu"
          @click="drawerOpen = !drawerOpen"
        />

        <q-btn flat to="/">
          <img src="img/logo-dnd.png" style="height: 60px; max-width: 150px" />
        </q-btn>

        <q-toolbar-title>Dndelicious</q-toolbar-title>

        <!-- <q-btn flat round dense icon="mdi-account" to="/user" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="drawerOpen"
      :mini="miniOpen"
      side="left"
      bordered
      content-class="bg-grey-3"
    >
      <q-list>
        <q-item
          clickable
          v-for="(index, key) in indexes"
          :key="key"
          :to="index.to"
        >
          <q-item-section avatar>
            <q-icon :color="index.color" :name="index.icon" />
          </q-item-section>

          <q-item-section>{{ index.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="absolute-right q-pt-sm q-mr-sm text-subtitle2">
          Made by F.P Aristeidi
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      drawerOpen: false,
      miniOpen: false,
      indexes: [
        {
          icon: "mdi-run",
          label: "Races",
          to: "/races",
          color: "brown"
        },
        {
          icon: "mdi-shield-account",
          label: "Classes",
          to: "/classes",
          color: "black"
        },
        {
          icon: "mdi-bitcoin",
          label: "Equipments",
          to: "/equipment",
          color: "orange"
        },
        {
          icon: "mdi-skull-scan",
          label: "Spells",
          to: "/spells",
          color: "accent"
        },
        {
          icon: "mdi-cat",
          label: "Monsters",
          to: "/monsters",
          color: "red"
        }
      ]
    };
  }
};
</script>
