<template>
	<div>
		<main-comp>
			<div class="search_body">
				<div class="search-input">
					<div class="search-input-wrapper">
						<i class="iconfont icon-sousuo"></i>
						<input type="text" v-model="msg">
					</div>
				</div>
				<div class="search_result">
					<div class="sub-title">电影/电视剧/综艺</div>
					<ul>
						<li class="items-info" v-for="items in movies" :key="items.id">
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
				</div>
			</div>
		</main-comp>

	</div>
</template>

<script>
	import mainComp from 'components/common/mainComp/mainComp'

	// import { getSer } from "network/movie/serach";

	export default {
		name: 'search',
		components: {
			mainComp,
		},
		data() {
			return {

				msg: '',
				movies: [],

			}
		},
		watch: {
			msg(newVal) {

				// console.log(this.$axios);  处理防抖依旧还是有问题
				clearTimeout(fd);
				var fd = setTimeout(() => {
					// console.log(newVal);
					this.$axios.get('/api/searchList?cityId=10&kw=' + newVal).then(res => {
						let msg = res.data.msg;
						let movie = res.data.data.movies;
						if (msg && movie) {
							// console.log(this);
							this.movies = movie.list;
							// console.log(this.movies);

						}
					})

				}, 100);




			}

		},
		mounted() {}

	}
</script>

<style lang="scss" scoped>
	.search-input {
		padding: 8px 10px;
		background-color: #f5f5f5;
		border-bottom: 1px solid #e5e5e5;



	}

	.search-input-wrapper {
		background: #fff;
		border: 1px solid #e9e6e6;
		border-radius: 5px;
	}

	.search-input-wrapper i {
		padding-left: 10px;
		// padding-right: 10px;

	}

	.search-input-wrapper input {
		padding-left: 5px;
		height: 30px;
		width: 85%;
		outline: none;
		border: none;
	}

	.sub-title {
		height: 30px;
		line-height: 30px;
		text-indent: 15px;
		border: 1px solid #e9e6e6;
		color: #a5a1a1
	}

	// .test {
	// 	height: 100%;
	// 	// overflow: hidden;
	// }

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


		background:#3c9fe6;
		color: #fff;
		font-size: 13px;
		border-radius: 5px;
	}
</style>