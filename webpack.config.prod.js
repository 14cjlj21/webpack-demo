
 const merge = require('webpack-merge');
 const common = require('./webpack.config.common.js');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //压缩代码
 const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output:{
        publicPath:""
        
    }, 
    plugins: [
        new UglifyJSPlugin({
        sourceMap: true
        }),
        new webpack.DefinePlugin({
           'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.HashedModuleIdsPlugin(), //缓存
    ]
}); 



