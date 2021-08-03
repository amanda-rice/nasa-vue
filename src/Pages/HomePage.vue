<template>
  <div class="HomePage container-fluid">
    <div class="row">
      <div class="col-md-6">
        <h1>Hello! A picture will go here!</h1>
      </div>
      <div class="col-md-6">
          <PicSearch />
      </div>
    </div>
  </div>
</template>


<script>
 // import {reactive} from 'vue'
import PicSearch from '../components/PicSearch.vue'
export default {
  name: 'HomePage',
  setup(){
    // const state = reactive({

    // })
    return {}
  },
  components:{PicSearch}
}
</script>


<style lang="scss" scoped>

</style>