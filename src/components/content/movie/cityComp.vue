<template>
	<div>
		<main-comp>
			<!-- <b-scroll class="test"></b-scroll> -->
				<div class="city_body">
					<div class="city_list" >
						<div class="city_hot" >
							<h2 >热门城市</h2>
							<ul class="" >
							
								<li v-for="lists in list" :key="lists.id" @click="handleTo(lists.nm,lists.id)">{{lists.nm}}</li>	


							</ul>
						</div>
						<div class="city_sort" >
							<div v-for="items in cities" :key="items.index">
								<h2>{{items.index}}</h2>
								<ul>
									<li v-for="lists in items.list" :key="lists.id" @click="handleTo(lists.nm,lists.id)">{{lists.nm}}</li>
									
								</ul>
							</div>
							
						</div>
					</div>
					<div class="city_index">
						<ul>
							<li v-for="items in cities" :key="items.index">{{items.index}}</li>
							
						</ul>
					</div>
				</div>
			

		</main-comp>

	</div>
</template>

<script>
	import mainComp from 'components/common/mainComp/mainComp'
	// import bScroll from 'components/common/scroll/Scroll'

	import { getCity ,City,City1,City2} from "network/movie/city";


	export default {
		name: 'city',
		components: {
			mainComp,
			// bScroll,
		},
		data(){
			return{
				cities:[],
				list:[]
				

			}
		},
		mounted(){

			let dataStr= sessionStorage.getItem('data')
			if(dataStr){
				
				this.cities=JSON.parse(dataStr).cityList;
				this.list=JSON.parse(dataStr).hotList;

			}
			else{
				getCity().then(res=>{
				let cities=res.data.data.cities;
				// this.formatCity(cities);
				let data = new City2(cities);
				this.cities=data.cityList;
				this.list=data.hotList;
				console.log(this.list);

				// 将数据存储在本地上,保存的格式为字符串的类型
				sessionStorage.setItem('data',JSON.stringify(data))
				
			
					
			})

			}
			

		},
		methods:{

			handleTo(nm,id){
				console.log(this.$store);
				console.log(this.$route);
				
				
				this.$store.commit('city/CITY_INFO',{nm,id});
				// 跳转到指定城市;

				sessionStorage.setItem('NM',nm);
				sessionStorage.setItem('ID',id);

				this.$router.push('/movie/playing');

			}
		
			
		}

	}
</script>

<style lang="scss" scoped>

	// .test{
	// 	width: 100%;
	// }
	.city_body {
		display: flex;
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
	}

	.city_body .city_list {
		flex: 1;
		overflow: auto;
		background: #FFF5F0;
	}

	.city_body .city_list::-webkit-scrollbar {
		background-color: transparent;
		width: 0;
	}

	.city_body .city_hot {
		margin-top: 20px;
	}

	.city_body .city_hot h2 {
		padding-left: 15px;
		line-height: 30px;
		font-size: 14px;
		background: #F0F0F0;
		font-weight: normal;
		
	}

	.city_body .city_hot ul {
		display: flex;
		flex-wrap: wrap;
		
	}

	.city_body .city_hot ul  li {
		background: #fff;
		width: 29%;
		height: 33px;
		margin-top: 15px;
		margin-left: 3%;
		padding: 0 4px;
		border: 1px solid #e6e6e6;
		border-radius: 3px;
		line-height: 33px;
		text-align: center;
		box-sizing: border-box;
	}

	// .city_body .city_sort{}
	.city_body .city_sort div {
		margin-top: 20px;
	}

	.city_body .city_sort h2 {
		padding-left: 15px;
		line-height: 30px;
		font-size: 14px;
		background: #F0F0F0;
		font-weight: normal;
	}

	.city_body .city_sort ul {
		padding-left: 10px;
		margin-top: 10px;
	}

	.city_body .city_sort ul li {
		line-height: 30px;
		line-height: 30px;
	}

	.city_body .city_index {
		width: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		line-height: 1.1;
		border-left: 1px #e6e6e6 solid;
	}

</style>