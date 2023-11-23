const path = require('path');

module.exports = {
  entry: './src/index.tsx', // 入口文件路径
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist') // 输出目录路径
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 匹配.tsx和.ts文件
        exclude: /node_modules/, // 排除node_modules目录
        use: 'ts-loader' // 使用ts-loader进行编译
      },
      {
        test: /\.scss$/, // 匹配.scss文件
        use: [
          'style-loader', // 将CSS注入到页面中的<style>标签
          'css-loader', // 解析CSS文件
          'sass-loader' // 编译SCSS为CSS
        ]
      },
      {
        test: /\.(png|jpg|gif)$/, // 匹配图片文件
        use: 'file-loader' // 使用file-loader加载图片文件
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'] // 解析扩展名，可以省略.tsx、.ts和.js文件的扩展名
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // devServer服务的根目录
    port: 8080, // devServer服务的端口号
    open: true // 自动打开浏览器
  }
};