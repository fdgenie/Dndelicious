<template>
  <div class="q-pa-md">
    <general-menu :items="monsters" section="Monster" :loading="loading" />
  </div>
</template>

<script>
import GeneralMenu from "components/misc/GeneralMenu";
import { mapGetters } from "vuex";

export default {
  name: "MonstersPage",
  components: {
    GeneralMenu
  },
  computed: {
    ...mapGetters({
      monsters: "monsters/getMonsters",
      loading: "loading/getLoading"
    })
  },
  data() {
    return {
      search: ""
    };
  },
  mounted() {
    this.$store.dispatch("monsters/setMonsters");
  }
};
</script>
