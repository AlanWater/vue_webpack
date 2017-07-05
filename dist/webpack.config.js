'use strict';

/**
 * Created by shenyong on 2017/6/27.
 */

var path = require('path'),
    webpack = require('webpack');

var webpackCongig = {

    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },

    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {}
                // other vue-loader options go here
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: { //webpack-dev-server配置
        historyApiFallback: true, //不跳转
        noInfo: true,
        inline: true //实时刷新
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }), new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        }
    }), new webpack.LoaderOptionsPlugin({
        minimize: true
    })]);
}

module.exports = webpackCongig;
//# sourceMappingURL=webpack.config.js.map