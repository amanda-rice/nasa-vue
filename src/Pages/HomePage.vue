<template>
  <div class="HomePage container-fluid">
    <div class="row">
      <div class="col-md-6 px-5">
          <PicSearch />
      </div>
      <div class="col-md-12">
          <Pic />
      </div>
    </div>
  </div>
</template>


<script>
 // import {reactive} from 'vue'
import PicSearch from '../components/PicSearch.vue'
import Pic from '../components/Pic.vue'
export default {
  name: 'HomePage',
  setup(){
    // const state = reactive({

    // })
    return {}
  },
  components:{PicSearch, Pic}
}
</script>


<style scoped>

</style>