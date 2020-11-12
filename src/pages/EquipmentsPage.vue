<template>
  <div class="q-pa-md">
    <general-menu :items="equipments" section="Equipment" :loading="loading" />
  </div>
</template>

<script>
import GeneralMenu from "components/misc/GeneralMenu";
import { mapGetters } from "vuex";

export default {
  name: "EquipmentsPage",
  components: {
    GeneralMenu
  },
  computed: {
    ...mapGetters({
      equipments: "equipments/getEquipments",
      loading: "loading/getLoading"
    })
  },
  data() {
    return {
      search: ""
    };
  },
  mounted() {
    this.$store.dispatch("equipments/setEquipments");
  }
};
</script>
