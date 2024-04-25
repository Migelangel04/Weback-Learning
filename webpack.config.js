// Install Webpack: npm install -D webpack webpack-cli
// Install CSS Loader: npm install -D style-loader css-loader
// Install CSS and SASS Loader: npm install -D sass style-loader css-loader sass-loader
// Install HTML WEBPACK PLUGIN: npm install -D html-webpack-plugin
// Install Webpack Dev Server: npm install -D webpack-dev-server [In scripts of package.json, but "dev": "webpack serve"]

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Set Mode to Development
    entry: { // entry is an object meaning we can have multiple entry points
        bundle: path.resolve(__dirname, './src/index.js'), // "bundle" is what this entry is called
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js', // contenthash
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map', // helps with debug
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [ // Goes right under "module". This is the typical Set Up of a template HTML
        new HtmlWebpackPlugin({
            title: 'Webpack App', 
            filename: 'index.html',
            template: './src/template.html', // Pull the template html file from the src folder
        }),
    ],
}