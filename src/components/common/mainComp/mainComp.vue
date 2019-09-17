<template>
    <div id="main-body">
        <slot></slot>

    </div>
</template>

<script>
    export default {
        name:'mainComp'
    }
</script>

<style lang="scss" scoped>
#main-body{
    position: absolute ;
	top:88px;
	bottom: 60px;
	overflow: auto;
	width:100%;

}

</style>