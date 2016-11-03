module.exports = {
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts' },
        ]
    },
    entry: {
        app: ['./app.ts'],
    },
    output: {
        filename: '[name].js'
    },
    devtool: 'source-map',
    debug: true
};