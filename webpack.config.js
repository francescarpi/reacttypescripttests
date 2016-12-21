var HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack'),
    colors = require('colors');

const envTypes = { dev: 'development', pre: 'production', prod: 'production' }
const env = envTypes[process.env.BUILD_ENV]

console.log('Build environment:'.green, `${process.env.BUILD_ENV}`.bold.red)
console.log('Webpack environment:'.green, `${env}\n`.bold.red)

module.exports = {
  entry: [
    './src/index.tsx',
  ],
  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
    publicPath: '/'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx$/, loader: 'awesome-typescript-loader' },

      // Less files
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },

      // Css files
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
  },

  // Dev server settings
  devServer: {
    publickPath: '/',
    historyApiFallback: true
  },

  // Plugins
  plugins: [
    // For optimize code
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),

    // Global constants    
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `'${env}'`,
      }
    }),

    // Preparing index.html
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: false,
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),

    // Stylesheet
    new ExtractTextPlugin('css/app.css'),

  ],

};