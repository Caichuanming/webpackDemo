module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
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