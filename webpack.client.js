const path = require("path");
const { commonConfig } = require("./webpack.common");

module.exports = {
    ...commonConfig,
    entry: './src/client/index.js',
    output: {
        filename: 'client.bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ],
                include: /\.module\.scss$/
            },
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    },
}