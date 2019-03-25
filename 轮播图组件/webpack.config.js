module.exports = {  
    entry: './SlidePictures.js',  //入口文件
    output: {  //输出文件路径设置
        path: __dirname,  
        filename: './dist/SlidePictures.min.js',  
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