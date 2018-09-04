const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//打包的时候自动生成H5文件
const CleanWebpackPlugin = require('clean-webpack-plugin');//清理多次打包产生的H5文件,只留下最新的H5打包文件
const webpack = require('webpack');

module.exports = {
    entry:{
        main:'./src/index.jsx'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    devtool: 'inline-source-map',//打包后,源文件错误对用到路径
    devServer:{//开发环境的服务器
        contentBase:'/dist',        //告诉开发服务器找文件的路径
        hot: true                   //模块热替换,只在开发环境中使用
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()    //开发环境模块热替换
    ]
};
