<template>
	<div>
		<main-comp>
			
			<b-scroll class="test">
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



			</b-scroll>




			
		</main-comp>


	</div>
</template>

<script>
	import mainComp from 'components/common/mainComp/mainComp'

	import bScroll from 'components/common/scroll/Scroll'



	export default {
		name: 'playing',
		components: {
			mainComp,
			bScroll,


			mounted() {
				console.log(this.$els);

			},


			methods: {

			}

		}

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