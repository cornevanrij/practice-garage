const webpack = require('webpack');
const path = require('path');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    watch: true,
    entry: {
        app: './src/js/main.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../app/static/dist'
    },
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "[name].js",
        chunkFilename: "[name].chunk.js",
        path: resolve("../app/static/dist")
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue: 'vue/dist/vue.js',
            '@': './src',
            components: './src/components'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
};