<template>
  <div>
  <monster-info
     :monster-info= "monster"
     :loading="loading"
      />
  </div>
</template>

<script>
import monsterInfo from '../components/MonsterInfo.vue'
import { mapGetters } from "vuex";

export default {
  name: 'monster',
  components: {
    monsterInfo
  },
  computed: {
    ...mapGetters({
      monster: "monsters/getMonster",
      loading: "loading/getLoading"
    })
  },
  mounted () {
    this.$store.dispatch('monsters/setMonster', { monsterName: this.$route.params.monster })
  }
}
</script>
