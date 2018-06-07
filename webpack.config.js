const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        application: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname) + '/public',
        filename: 'scripts/[name].js',
    },
    plugins: [
        new ExtractTextPlugin('stylesheets/[name].css'),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react', 'stage-2', ],
                    },
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    // fallback: "style-loader"
                })
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        host: "0.0.0.0",
        index: 'index.html',
        port: 8080,
        historyApiFallback: true,
    },
};
