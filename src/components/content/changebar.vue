<template>
    <div>
      
            <sub-menu>
                <router-link tag="div" class="city_name" to="/movie/city">
					<span>{{$store.state.city.nm}}</span><i class="iconfont icon-lower-triangle"></i>
				</router-link >
				
                <router-link tag="div" class="hot_item active" to="/movie/playing">正在热映</router-link >
                <router-link tag="div" class="hot_item" to="/movie/coming">即将上映</router-link >
				
				<router-link tag="div" class="search_entry" to="/movie/search">
					<i class="iconfont icon-sousuo" style="color:#e45847; font-size:20px "></i>
				</router-link >
            </sub-menu>
				
		

    </div>
</template>

<script>
import subMenu from 'components/common/subMenu/subMenu'



    export default {
        name:'changebar',
        components:{
            subMenu,
        }
    }
</script>

<style lang="scss" scoped>


div.router-link-active{
    border-bottom:2px solid  #e54847;
    color: #e54847;
    padding:0 3px;
}

</style>