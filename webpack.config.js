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
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.pug', '.css'],
    alias: {
      vue: 'vue/dist/vue.js',
    },
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
        use: ['vue-style-loader', 'css-loader'],
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
