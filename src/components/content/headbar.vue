<template>
    <div>
        <header id="header">
			<div class="nav-left"><slot name="left"></slot></div>
            <div class="nav-center"><slot name="center">标题</slot></div>
            <div class="nav-right"><slot name="right"></slot></div>
		</header>

    </div>
</template>

<script>
    export default {
        name:'headbar',

        props:{
            title:{
                type:String,
                default:'喵喵电影'
            }
        },
    }
</script>

<style lang="scss" scoped>
#header{
    z-index:6;
	color:#fff;
	background: #e54847;
	height: 44px;
	// text-align: center;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	// 定位;
	position: fixed;
	top: 0;
	left: 0;right: 0;
	
}
</style>