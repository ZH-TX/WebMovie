<template>
    <div>
       <headbar><div slot='center'>我的喵喵</div> </headbar>

       <div class="form">
          
            <div class="form-list"><input type="text" placeholder="账号名/手机号/email"></div>
            <div class="form-list"><input type="password" placeholder="请输入您的密码"></div>
       </div>
       <button class="btn">登 &nbsp; 录</button>
       <div class="little-font">
           <span>立即注册</span><span>忘记密码</span>
       </div>
       
       
    </div>
</template>

<script>
import headbar from 'components/content/headbar'
// import mainComp from 'components/common/mainComp/mainComp'


    export default {
        name:'Mine',
        components:{
            headbar,
            // mainComp,
            
        }
        
    }
</script>

<style lang="scss" scoped>
.form{
    padding-top:44px;
    font-size:16px;

}

.form-list input{
    width: 100%;height: 50px;
    text-indent: 10px;
    outline:none;
    border:none;
    border-bottom:1px solid #cccccc

}
.btn{
    margin-top: 20px;
    width: 100%;height: 50px;
    background: #e54847;
    color: #fff;
    font-size:20px;
    outline: none;
    border:none;
}
.little-font{
    color:#e54847;
    display: flex;
    font-size:14px;
    justify-content: space-between;
    margin-top:10px;
}

</style>