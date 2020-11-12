<template>
  <div class="q-pa-md">
    <general-menu :items="spells" section="Spell" :loading="loading"  />
  </div>
</template>

<script>
import GeneralMenu from "components/misc/GeneralMenu";
import { mapGetters } from "vuex";

export default {
  name: "SpellsPage",
  components: {
    GeneralMenu
  },
  computed: {
    ...mapGetters({
      spells: "spells/getSpells",
      loading: "loading/getLoading"
    })
    
  },
  data() {
    return {
      search: ""
    };
  },
  mounted() {
    this.$store.dispatch("spells/setSpells");
  }
};
</script>
