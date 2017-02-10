/* webpack.config.js
 * @ whelmin
 */
// should run `cnpm install webpack extract-text-webpack-plugin html-webpack-plugin --save-dev` before
var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        // 输入
        app: ['./src/js/main.js'],
        // 第三方库modules单独打包, 填入modules名即可
        // TODO
        lib: []
    },
    output: {
        // 输出
        path: './dist',
        filename: '[name].js?[chunkhash:8]',
        publicPath: "dist/"
    },
    plugins: [
        // 第三方库modules单独打包
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            filename: 'lib.js?[chunkhash:8]',
            chunks: ['app', 'lib']
        }),
        // 输出html
        new HtmlPlugin({
            // html模板文件地址
            template: './src/index.html',
            // 输出路径及文件名
            filename: '../index.html',
            // chunks表示要引用entry里面的入口
            chunks: ['app', 'lib'],
            // script插入的标签
            inject: 'body'
        }),
        // 输出css (link标签方式插入)
        new ExtractTextPlugin('[name].css?[contenthash:8]'),
        // 配置生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        // TODO
        loaders: [{
            // 处理html, 如img-src
            // should run `cnpm install html-loader --save-dev` before
            test: /\.html$/, loader: 'html'
        },  {
            // sass将编译为css
            // should run `cnpm install style-loader css-loader sass-loader node-sass compass-mixins --save-dev` before
            // sass中引入compass时加 `@include ?/node_modules/compass-mixins/lib/compass`
            test: /\.scss$/, loader: ExtractTextPlugin.extract(['css', 'sass']), exclude: /node_modules/
        },  {
            // 压缩图片, <=8k的将编译为base64
            // should run `cnpm install url-loader image-webpack-loader --save-dev` before
            test: /\.(jpe?g|png|gif)$/, loaders: [ 'file?limit=8192&name=img/[name].[ext]?[hash:8]', 'image-webpack' ]
        }],
        resolve: {
            extensions: ['', '.js']
            // require('./main') <=> require('./main.js')
        }
    }
};