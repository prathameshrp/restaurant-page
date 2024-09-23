const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
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
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        presets: [
                        ['@babel/preset-env']
                        ]
                    }
                }
            },
            
        ],
    },
}