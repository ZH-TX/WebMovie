<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/movie">movie</router-link> |
      <router-link to="/cinema">cinema</router-link>|
      <router-link to="/mine">mine</router-link>
    </div> -->
    <headbar></headbar>
    <!-- <changebar></changebar> -->

    <keep-alive>
      <router-view/>
    </keep-alive>

    
    <foot1></foot1>


    

  </div>
</template>

<script>


import headbar from 'components/content/headbar'
// import changebar from 'components/content/changebar'
import foot1 from 'components/content/footer'









export default {
  name:'app',
  components:{
    headbar,
    // changebar,
    foot1,
  }
}
</script>



<style lang="scss">
@import url('assets/css/base');
@import url('assets/iconfont/iconfont')

</style>
