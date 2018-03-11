import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HandlebarsPlugin from 'handlebars-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as path from 'path';
import * as process from 'process';
import * as Webpack from 'webpack';

const portNumber = 3000;

const baseDir = `app`;
console.log('test path:' , path.resolve(path.join(baseDir)));
const mainConfig = {
    entry: {
      './dist/bundle.js': './app/src/index.ts',
      './dist/main.css':'./app/src/scss/main.scss',
      './demos/demo.js': './app/demos/index.ts',
      './demos/main.css':'./app/src/scss/main.scss',
    },
    output: {
      publicPath: '/',
      filename: '[name]',
      path: path.resolve(path.join(baseDir))
    },
    'plugins': [
      // new Webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('[name]'),
      new CopyWebpackPlugin([
        {
          from: `${baseDir}/src/images`,
          to: `dist/images`
        },
        {
          from: `${baseDir}/src/fonts`,
          to: `dist/fonts`
        }
      ]),
      new HandlebarsPlugin({
        // path to hbs entry file(s)
        entry: path.join(process.cwd(), baseDir, 'src', '*.hbs'),
        data: {}/*require('./project.properties.json')*/,
        // output path and filename(s)
        // if ommited, the input filepath stripped of its extension will be used
        output: path.join(process.cwd(), baseDir, 'dist', '[name].html'),
        // globbed path to partials, where folder/filename is unique
        partials: [
          path.join(process.cwd(), baseDir, 'src', 'components', '**', '**', '*.hbs')
        ],
        onBeforeCompile: function (Handlebars, templateContent) {},
        onBeforeRender: function (Handlebars, data) {
          // if(process.argv.pop() === '--env.prod') {
          //     return Object.assign(data, {
          //       googleTagId: data.googleAnalytics.prodId
          //     });
          // } else {
          //   return Object.assign(data, {
          //     googleTagId: data.googleAnalytics.devId
          //   });
          // }
        },
        onBeforeSave: function (Handlebars, resultHtml, filename) {},
        onDone: function (Handlebars, filename) {}
      })
    ],
    module: {
      rules: [
       /* { // regular css files
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            loader: 'css-loader?importLoaders=1',
          }),
        },*/
        /*{ // sass / scss loader for webpack
          test: /\.(sass|scss)$/,
          use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        },*/
        {
          test: /\.(sass|scss)$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: "css-loader!sass-loader",
          }),
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
      alias: {
        handlebars: 'handlebars/dist/handlebars.min.js'
      }
    },
    devServer: {
      port: portNumber
    }
};

export default mainConfig;
