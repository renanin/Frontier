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
<<<<<<< HEAD
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.pug', '.css'],
    alias: {
      vue: 'vue/dist/vue.js',
    },
},
=======
>>>>>>> 244526509c25e8eaa602bff94f8c3e0f8b042ca2
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
<<<<<<< HEAD
        use: ['vue-style-loader', 'css-loader'],
=======
        use: ['style-loader', 'css-loader'],
>>>>>>> 244526509c25e8eaa602bff94f8c3e0f8b042ca2
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
