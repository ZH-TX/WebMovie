module.exports={
    configureWebpack:{
        resolve:{
            extensions:['.js','.css', '.vue'],
            alias:{
                'assets':'@/assets',
                'components':'@/components',
                'routers':'@/routers',
                'stores':'@/stores',
                'views':'@/views',
                'network':'@/network'
    
    
            }
    

        }
       
    },

    devServer:{
        proxy:{
            // 代理的
            '/api':{
                target:'http://39.97.33.178',
                changeOrigin:true,
                // pathRewrite:{
                //     '^/api':''

                // }
                
            }
        }

    }

}