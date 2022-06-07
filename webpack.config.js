const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/main.js'
    },
    plugins: [
        new HtmlWebPackPlugin({title: 'LRQC client'})
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
        publicPath: "auto",
        assetModuleFilename: '[path][name].[hash][ext][query]',
        library: "langQcClient"
    },
    devServer: {
        static: './dist'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(html|svelte)$/,
                use: 'svelte-loader'
            },
            {
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                  fullySpecified: false
                }
            },
            {
                test: /\.png$/i,
                type: "asset/resource"
            }
        ]
    }
}
