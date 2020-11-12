<template>
  <div>
  <class-info
     :class-hero= "classHero"
     :loading="loading"
      />
  </div>
</template>

<script>
import classInfo from '../components/ClassInfo.vue'
import { mapGetters } from "vuex";

export default {
  name: 'class',
  components: {
    classInfo
  },
  computed: {
    ...mapGetters({
      classHero: "roles/getClass",
      loading: "loading/getLoading"
    })
  },
  mounted () {
    this.$store.dispatch('roles/setClass', { classSpec: this.$route.params.class })
  },
  
}
</script>
