<template>
    
		
		<div id="content">
			<headbar><div slot='center'>喵喵电影</div> </headbar>
			<changebar></changebar>
			
			<keep-alive>
				<router-view></router-view>
			
			</keep-alive>
			
		</div>
		
	
</template>

<script>
import headbar from 'components/content/headbar'
import changebar from 'components/content/changebar'

// import playComp from 'components/content/playComp'





    export default {
		name:'Movie',
		
		components:{
			headbar,
			changebar,
			// playComp,
		}
        
    }
</script>

<style lang="scss" scoped>






</style>