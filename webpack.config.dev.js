 const merge = require('webpack-merge');
 const common = require('./webpack.config.common.js');
 const webpack = require('webpack');
 const OpenBrowserPlugin = require('open-browser-webpack-plugin'); //自动打开浏览器
 const path = require ('path');
 module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry:[  
            'webpack/hot/dev-server',
             path.resolve(__dirname, './src/index.jsx'),
            "webpack-dev-server/client?http://localhost:3000"
        ],
    plugins:[
        new webpack.HotModuleReplacementPlugin(),    //开发环境模块热替换
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:3000' 
        })
    ]
 });

