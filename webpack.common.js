const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const commonConfig = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader"
            },
            {
                test: /\.css$/i,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'asset/resource'
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new CleanWebpackPlugin(), // Only cleans build/server
    ]
}

module.exports = {
    commonConfig
}