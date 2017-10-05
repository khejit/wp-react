const path = require('path');
const webpack = require('webpack-stream').webpack;

module.exports = {
    devtool: 'cheap-module-inline-source-map',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, '../../js'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader'
            }, {
                test: /\.scss$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.scss$/,
                loader: 'sass-loader'
            }
        ]
    },
    plugins: [
        // uncomment those lines for production
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false },
          comments: false,
          minimize: false
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};
