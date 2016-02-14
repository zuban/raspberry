module.exports = {
    context: __dirname,
    entry: "./app-dev.js",
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react']
                }
            }
        ]
    }
};