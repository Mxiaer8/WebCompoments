module.exports = {  
    entry: './use.js',  //入口文件
    output: {  //输出文件路径设置
        path: __dirname,  
        filename: './test/bundle.js',  
        libraryTarget: 'umd'
    },  
    module: {
        rules: [{  
            test: /\.js$/,  
            exclude: /node_modules/,  
            use: 'babel-loader'  
        }
        // ,
        // {
        //     test: /\.css$/,
        //     use: [
        //         { loader: 'style-loader' },
        //         {loader: 'css-loader',
        //             options: {
        //                 modules: true
        //             }
        //         }
        //     ]
        // }
    ]
     } 
            
}   