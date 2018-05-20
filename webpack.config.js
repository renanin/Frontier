const path = require('path');
const VueLoader = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: [path.resolve(__dirname, 'src', 'main.ts')],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
        },
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
    ],
  },
  plugins: [
    new VueLoader(),
  ],
};
