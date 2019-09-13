<template>
    <div class="submenu">
        <slot></slot>

    </div>
</template>

<script>
    export default {
        name:'subMenu',

    }
</script>

<style lang="scss" scoped>
.submenu{
     position: fixed;
    z-index: 1;
    top:44px;
    height: 44px;
    left: 0;right: 0; background: #fff;
    display:flex;
    justify-content: space-around ;
    align-items: center;

    border-bottom: 1px solid rgb(219, 216, 216);
    line-height: 44px;
}

</style>