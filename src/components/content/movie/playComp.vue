<template>
	<div>
		<main-comp>
			<!--未完功能: 1上拉刷新,下拉加载更多 -->

			<loading v-if="isLoad"></loading>
			<b-scroll class="test" v-else>
				<ul>
					<li class="items-info" v-for="items in movieList" :key="items.id">
						<div class="set-img"><img :src="items.img|setWH('128.180')"></div>
						<div class="main-info">
							<h3>{{items.nm}} </h3>
							<div class="sub-con">
								<p>观众评分 <span class="grade">{{items.sc}}</span></p>
								<p>主演: {{items.star}}</p>
								<p>{{items.showInfo}}</p>

							</div>
							
						</div>
						<button class="btn-mall">
							购票
						</button>
					</li>
				
				</ul>



			</b-scroll>




			
		</main-comp>


	</div>
</template>

<script>
	import mainComp from 'components/common/mainComp/mainComp'

	import bScroll from 'components/common/scroll/Scroll'

	import { getPlay } from "network/movie/play"



	export default {
		name: 'playing',
		components: {
			mainComp,
			bScroll,

			},
			data(){
				return{
					isLoad:true,
					movieList:[],
				}
			},


			
			activated() {
				this.isLoad=false;

				let cityId=this.$store.state.city.id
				getPlay(cityId).then(res=>{
				
					// console.log(res.data.data.movieList);
					this.movieList=res.data.data.movieList;
				})
				

			},

			methods: {

			},

			

		

	}
</script>

<style lang="scss" scoped>
	.test {
		height: 100%;
		// overflow: hidden;
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
	.set-img img{
		height: 90px;
		box-shadow: 2px 2px 5px #333333;
	}
	.main-info{
		width: 50%;
	}
	.main-info h3{
		width:80%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.sub-con{
		font-size: 14px;
		color: #666;
	}

	// div h3,div p{
	// 	overflow: hidden;
	// 	text-overflow: ellipsis;
	// 	white-space: nowrap;
	// }

	.sub-con p{
		padding: 5px 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
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