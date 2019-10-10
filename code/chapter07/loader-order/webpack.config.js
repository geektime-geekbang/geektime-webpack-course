const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    path.resolve('./loaders/a-loader'),
                    path.resolve('./loaders/b-loader')
                ]
            }
        ]
    }
}