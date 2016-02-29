/**
 * Created by Ron on 16/2/27.
 */

var path = require('path');

module.exports = {
    entry:[
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    //modulesDirectories: [
    //    'node_modules'
    //],
    module: {
        loaders: [{
            test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // The module to load. "babel" is short for "babel-loader"
            query:{
                presets: ['es2015', 'react']
            }
        }]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: "./build"
    }
};

