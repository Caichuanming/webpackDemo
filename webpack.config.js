const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ],
    },
    plugins: [
        // new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
    ]
}