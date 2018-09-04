const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清理多次打包产生的H5文件,只留下最新的H5打包文件
const HtmlWebpackPlugin = require('html-webpack-plugin');//打包的时候自动生成H5文件
const env = process.env.NODE_ENV;
const ExtractTextPlugin = require('extract-text-webpack-plugin')  //独立打包css ,开发环境不用
const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development" ? true : false
});
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');   //压缩css,配合ExtractTextPlugin使用




module.exports = {
    entry: {
        main: './src/index.jsx'
    },
    output: {
        //publicPath: '/assets/',
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].js',       //决定非入口 chunk 的名称
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {   //防止重复
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: 'single'
    },
    resolve: {       //自动解析确定的扩展
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css|scss$/,
                use: [{
                    loader: "style-loader"
                },

                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                    "resolve-url-loader",
                    "sass-loader?sourceMap",
                {
                    loader: 'postcss-loader',  //自动添加浏览器前缀名
                    options: {
                        sourceMap: true,
                        plugins: function () {
                            return [
                                require("autoprefixer")({
                                    browsers: ["last 4 versions"]
                                })
                            ];
                        }
                    }
                }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',         //firle-loader和url-loader配合人使用,url-loader可以限制图片大小
                        options: {
                            limit: 5000, //小于5000b的图片文件转base64到css里,当然css文件体积更大;
                            name: 'img/[name].[hash:8].[ext]',//设置最终images路径;
                        }
                    },
                    {
                        loader: 'img-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        extractSass,
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,         //正则匹配
            cssProcessor: require('cssnano'),             //优化css
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },    //清除注释
            canPrint: true                                  //是否打印到控制台,默认true
        })

        
    ]
};
