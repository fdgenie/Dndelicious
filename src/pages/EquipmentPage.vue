<template>
  <div>
  <equipment-info
     :equipment= "equipment"
     :loading="loading"
      />
  </div>
</template>

<script>
import equipmentInfo from '../components/EquipmentInfo.vue'
import { mapGetters } from "vuex";

export default {
  name: 'Equipment',
  components: {
    equipmentInfo
  },
   computed: {
    ...mapGetters({
      equipment: "equipments/getEquipment",
      loading: "loading/getLoading"
    })
  },
  mounted () {
    this.$store.dispatch('equipments/setEquipment', { equipmentName: this.$route.params.equipment })
  }
}
</script>
