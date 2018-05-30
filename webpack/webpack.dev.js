const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('../helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'eval-source-map',
    entry: [
        './src/index.js'
    ],
    mode: 'development',
    output: {
        path: helpers.root('dist'),
        filename: 'bundle.js'
    },  
    devServer: {
        contentBase: './src'
    }
});