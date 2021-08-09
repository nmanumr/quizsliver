const path = require('path');
const copyFilePlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        sliver: "./src/sliver.ts",
        popup: "./src/popup.ts",
        background: "./src/background.ts",
        injector: "./src/injector.ts"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    'style-loader',
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.scss'],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
        },
    },
    plugins: [
        new copyFilePlugin([
            {from: "_locales", to: "_locales"},
            {from: "icons", to: "icons"},
            {from: "src/manifest.prod.json", to: "manifest.json"}
        ])
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
