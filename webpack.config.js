var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: "inline-source-map",
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
    devServer: {
        port: 8000,
        host: 'localhost',
        publicPath: '/dist',
        contentBase: path.resolve(__dirname, 'src'),
        historyApiFallback: true,
        open: true,
    }
};