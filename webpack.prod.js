const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html", "./src/style.css"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            favicon: "./src/assets/images/fevicon-logo-vector-img.png",
        }),
    ],
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
            ,
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: "asset/resource",
            },
            
        ],
    },
}