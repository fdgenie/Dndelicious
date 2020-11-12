<template>
  <div class="q-pa-md">
    <general-menu :items="classes" section="Class" :loading="loading" />
  </div>
</template>

<script>
import GeneralMenu from "components/misc/GeneralMenu";
import { mapGetters } from "vuex";

export default {
  name: "ClassesPage",
  components: {
    GeneralMenu
  },
  computed: {
    ...mapGetters({
      classes: "roles/getClasses",
      loading: "loading/getLoading"
    })
  },
  data() {
    return {
      search: ""
    };
  },
  mounted() {
    this.$store.dispatch("roles/setClasses");
  }
};
</script>
