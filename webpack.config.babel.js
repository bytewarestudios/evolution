import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const portNumber = 3000;

module.exports = {
  entry: ['./src/index.ts', './src/scss/main.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  'plugins': [new ExtractTextPlugin('[name].css')],
  module: {
    rules: [
      // uncomment and use for es6 without typescript
      // {
      //   test: /\.js?$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options:{
      //         'presets': [['es2015', {'modules': false}]]
      //       }
      //     }
      //   ]
      // },
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
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    port: portNumber,
    proxy: [
      {
        context: ['/llane.java.api/**'],
        target: 'http://localhost:8080',
        secure: false
      }
    ]
  }

}

