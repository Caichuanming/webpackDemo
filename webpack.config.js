module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    loader: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
            }
        ],
    },
    // module: {},
    // plugins: {},
}