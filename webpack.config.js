const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "eval-cheap-source",//生成source-map
    entry: __dirname + "/src/main.js",
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Output Management'
    //     })
    // ],
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    // module: {
    //     rule: [
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 "style-loader",
    //                 "css-loader",
    //             ],
    //         }
    //     ],
    // }
}