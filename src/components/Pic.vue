<template>
  <div class="pic p-4 row align-items-center justify-content-center full-height">
    <div class="px-4 py-2 col-md-6">
      <img :src="state.image" alt="" class=" full-height max-width">
    </div>
    <div class="px-4 py-2 text-left col-md-6">
      <div>{{state.desc}}</div>
    </div>
  </div>
</template>


<script>
import { computed, reactive } from 'vue';
import { AppState } from '../AppState';
// import { PicsService } from '../services/PicsService';
export default {
  name: 'Pic',
  setup(){
const state = reactive({
  desc: computed(()=> AppState.pics.explanation),
  image: computed(()=> AppState.pics.hdurl)
})
    return { state,
    }
  }
};
</script>


<style scoped>
.movie:hover{
  color: aqua;
  transform: scale(1.1);
  cursor: pointer;
}
.full-height{
  height: 75vh;
}
.max-width{
  max-width: 100%;
}
</style>