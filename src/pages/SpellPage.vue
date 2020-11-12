<template>
  <div>
    <spell-info :spell-info="spell" :loading="loading" />
  </div>
</template>

<script>
import spellInfo from "../components/SpellInfo.vue";
import { mapGetters } from "vuex";

export default {
  name: "spell",
  components: {
    spellInfo
  },
  computed: {
    ...mapGetters({
      spell: "spells/getSpell",
      loading: "loading/getLoading"
    })
  },
  mounted() {
    this.$store.dispatch("spells/setSpell", {
      spellSpec: this.$route.params.spell
    });
  }
};
</script>
