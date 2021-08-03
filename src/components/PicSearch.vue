<template>
  <div class="PicSearch row">
    <form @submit.prevent="getPic">
      <label for="picDay">Choose Date:</label>
      <input v-model="state.query" type="date" id="picDay" name="picDay">
      <button>Search</button>
    </form>
    <!-- <div v-for="m in movies" :key="m.id" class="col-12 movie" @click="setActiveMovie(m)">{{m.title}}</div> -->
    <div class="col-12">
    </div>
  </div>
</template>


<script>
import {  computed, onMounted, reactive } from 'vue';
import {picsService} from '../services/PicsService'
import { AppState } from '../AppState';
export default {
  name: 'PicSearch',
  setup(){
const state = reactive({
query: ''
})
onMounted(()=> {
   picsService.getPic()
})
    return { 
      state,
      picSearches: computed(()=> AppState.pics),
      getPic(){
        picsService.getPic(state.query)
      },
      }
  },
  components: {}
};
</script>


<style lang="scss" scoped>

</style>