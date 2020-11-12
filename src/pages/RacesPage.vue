<template>
  <div class="q-pa-md">
    <general-menu :items="races" section="Race" :loading="loading"  />
  </div>
</template>

<script>
import GeneralMenu from "components/misc/GeneralMenu";
import { mapGetters } from "vuex";

export default {
  name: "RacesPage",
  components: {
    GeneralMenu
  },
  computed: {
    ...mapGetters({
      races: "races/getRaces",
      loading: "loading/getLoading"
    })
    
  },
  data() {
    return {
      search: ""
    };
  },
  mounted() {
    this.$store.dispatch("races/setRaces");
  }
};
</script>
