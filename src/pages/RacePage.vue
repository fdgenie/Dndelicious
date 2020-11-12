<template>
  <div>
  <race-info
     :race= "raceName"
     :loading="loading"
      />
  </div>
</template>

<script>
import raceInfo from '../components/RaceInfo'
import { mapGetters } from "vuex";

export default {
  name: 'Race',
  components: {
    raceInfo
  },
  computed: {
    ...mapGetters({
      raceName: "races/getRace",
      loading: "loading/getLoading"
    })
  },
  mounted () {
    this.$store.dispatch('races/setRace', { raceName: this.$route.params.race })
  }
}
</script>
