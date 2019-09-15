<template>
    <div>
        <main-comp>
            <div class="search_body">
				<div class="search-input">
					<div class="search-input-wrapper">
						<i class="iconfont icon-sousuo"></i>
						<input type="text">
					</div>					
				</div>
				<div class="search_result">
					<div class="sub-title">电影/电视剧/综艺</div>
					<ul>
						<li class="items-info">
						<div class=""><img src="images/movie_1.jpg"></div>
						<div class="">
							<h3>无名之辈</h3>
							<div class="sub-con">
								<p>观众评分 <span class="grade">9.2</span></p>
								<p>主演: 陈建斌,任素汐,潘斌龙</p>
								<p>今天55家影院放映607场</p>

							</div>
							
						</div>
						<button class="btn-mall">
							购票
						</button>
					</li>
					</ul>
				</div>
			</div>
        </main-comp>
        
    </div>
</template>

<script>
import mainComp from 'components/common/mainComp/mainComp'


    export default {
        name:'search',
        components:{
            mainComp,
        }
        
    }
</script>

<style lang="scss" scoped>
.search-input{
    padding: 8px 10px;
    background-color: #f5f5f5;
	border-bottom: 1px solid #e5e5e5;
	
	

}
.search-input-wrapper{
	background: #fff;
	border: 1px solid #e9e6e6;
	border-radius: 5px;
}
.search-input-wrapper i{
	padding-left: 10px ;
	// padding-right: 10px;
	
}
.search-input-wrapper input{
	padding-left:5px; 
	height: 30px;
	width: 85%;
	outline: none;
	border: none;
}

.sub-title{
	height: 30px;
	line-height: 30px;
	text-indent: 15px;
	border: 1px solid #e9e6e6;
	color: #a5a1a1
}

.items-info{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		display: flex;
		align-items: center;
		// align-content: center;
		justify-content: space-around;

		border-bottom: 1px solid #cccccc;
		padding:10px;
		// list-style: none;

	}

	.sub-con{
		font-size: 14px;
		color: #666;
	}

	.sub-con p{
		padding: 5px 0;
	}
	.grade{
		color: #faaf00;
		font-weight: 800;
	}

	.btn-mall{
		width: 47px; height: 27px;
		border: none;
		outline: none;


		background: #e54847;
		color: #fff;
		font-size: 13px;
		border-radius: 5px;
	}

</style>