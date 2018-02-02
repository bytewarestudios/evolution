const process = require('process');
const path = require('path');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const  HandlebarsPlugin = require('handlebars-webpack-plugin');

const portNumber = 3000;

module.exports = {
    entry: {
      './bundle.js': './src/index.ts',
      './main.css':'./src/scss/main.scss'
    },
    output: {
      publicPath: 'dist',
      filename: '[name]',
      path: path.resolve(__dirname, 'dist')
    },
    'plugins': [
      new ExtractTextPlugin('[name]'),
      new CopyWebpackPlugin([
        {
          from: 'src/images',
          to: 'images',
        },
        {
          from: 'src/fonts',
          to: 'fonts',
        }
      ]),
      new HandlebarsPlugin({
        // path to hbs entry file(s)
        entry: path.join(process.cwd(), 'src', '*.hbs'),
        data: require('./project.properties.json'),
        // output path and filename(s)
        // if ommited, the input filepath stripped of its extension will be used
        output: path.join(process.cwd(), 'dist', '[name].html'),
        // globbed path to partials, where folder/filename is unique
        partials: [
          path.join(process.cwd(), 'src', 'partials', '**','**', '*.hbs'),
          path.join(process.cwd(), 'src', '**', '**', '*.hbs')
        ],
        onBeforeCompile: function (Handlebars, templateContent) {},
        onBeforeRender: function (Handlebars, data) {
          if(process.argv.pop() === '--env.prod') {
              return Object.assign(data, {
                googleTagId: data.googleAnalytics.prodId
              });
          } else {
            return Object.assign(data, {
              googleTagId: data.googleAnalytics.devId
            });
          }
        },
        onBeforeSave: function (Handlebars, resultHtml, filename) {},
        onDone: function (Handlebars, filename) {}
      })
    ],
    module: {
      rules: [
        { // regular css files
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            loader: 'css-loader?importLoaders=1',
          }),
        },
        { // sass / scss loader for webpack
          test: /\.(sass|scss)$/,
          use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
        alias: {}
    }
}
