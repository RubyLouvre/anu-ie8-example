const path = require('path');
const es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            react:        'anujs/dist/ReactIE.js',
            'react-dom':  'anujs/dist/ReactIE.js',
            'prop-types':  'anujs/lib/ReactPropTypes.js',
            'create-react-class': 'anujs/lib/createClass.js'
        }
    },
    devtool: 'source-map',//不使用eval方便调试
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015-loose', 'react'],
                        plugins: [
                            'transform-class-properties',
                            [
                                'transform-es2015-classes',
                                {
                                    loose: true
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loade']
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100,
                            name: 'asset/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    mode: 'development',
    plugins: [new es3ifyPlugin()]
};