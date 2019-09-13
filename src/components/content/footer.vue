<template>
    <div>
        <footer id="footer1">
			<ul>
				<router-link tag='li' to="/movie" class="active">
					<i class="iconfont icon-dianying"></i>
					<div>电影</div>
				</router-link>
				<router-link tag='li' to="/cinema">
					<i class="iconfont icon-yingyuan"></i>
					<div>影院</div>
				</router-link >
				<router-link tag='li' to="/mine">
					<i class="iconfont icon-wode"></i>
					<div>我的</div>
				</router-link >
			</ul>
		</footer>
    </div>
    
</template>

<script>
    export default {
        name:'footer1',
    }
</script>

<style lang="scss" scoped>

/* footer css*/
#footer1{
    height: 60px;
    position:fixed;
    left:0; right: 0;
    bottom: 0;
    background: #fff;
    // display: flex;

    border-top: 2px solid rgb(228, 223, 223)
  
    
  
}

#footer1 ul{
    display: flex;
    align-content: center;
   
    
   
   
    
}

ul li{
    flex:1;
    text-align: center;
}
ul li.router-link-active{
    color:#e54847;
    

}

</style>