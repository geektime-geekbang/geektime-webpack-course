const path = require('path');
const ZipPlugin = require('./plugins/zip-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'production',
    plugins: [
        new ZipPlugin({
            filename: 'offline'
        })
    ]
}