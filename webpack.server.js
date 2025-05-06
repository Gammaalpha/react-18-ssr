const path = require("path");
const nodeExternals = require('webpack-node-externals');
const { commonConfig } = require("./webpack.common");

module.exports = {
    ...commonConfig,
    entry: './src/server/index.js',
    target: 'node',
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader"
            },
        ]
    },
    externals: [nodeExternals()]
}