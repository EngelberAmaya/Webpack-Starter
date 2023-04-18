const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { 
                            minimize: false,
                            sources: false
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                /*exclude: /styles\.css$/,*/
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
}