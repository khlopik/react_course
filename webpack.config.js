var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DEST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './app/index.js',
    output: {
        path: DEST_PATH,
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: 'app/index.html'
            }
        )
    ]
}