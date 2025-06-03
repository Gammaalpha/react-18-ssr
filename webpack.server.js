const path = require("path");
const nodeExternals = require('webpack-node-externals');
const { commonConfig } = require("./webpack.common");

module.exports = {
    ...commonConfig,
    entry: './src/server/index.js',
    target: 'node',
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, 'build/server'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: 'null-loader', // stub out SCSS on the server
            },
        ]
    },
    externals: [nodeExternals()],
}