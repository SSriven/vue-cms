
//webpack配置文件
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  entry:path.join(__dirname,'./src/main.js'),
    output: {
      path: path.join(__dirname,'./dist'),
      filename:'bundle.js'
    },
  plugins: [
      new htmlWebpackPlugin({
        template: path.join(__dirname,'./src/index.html'),
        filename: 'index.html'
      }),
      new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {test: /\.vue$/,use:'vue-loader'},//处理vue文件
      {test: /\.css$/,use:['style-loader','css-loader']},//处理css文件的loader
      {test: /\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},//处理图片的loader
      // {test:/\.js$/,use:'babel-loader', exclude: /node_modules/},//配置babel转换es6的高级语法
      {test:/\.(ttf|svg|woff|woff2)$/,use:'file-loader'}
    ]
  }
};
