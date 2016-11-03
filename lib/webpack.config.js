module.exports = {
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts' },
        ]
    },
    externals: {
        "react": {
            root: "React",
            commonjs: "react",
            commonjs2: "react",
            amd: "react"
        }
    },
    entry: {
        geometrics: ['./src/geometrics.ts'],
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        libraryTarget: "umd",
        library: 'geometrics'
    },
    devtool: 'source-map',
    debug: true
};