let path = require("path");
module.exports = {
  // 3.3以前publicPath叫做baseUrl
  // publicPath:"www.baidu.com", //指定域名
  // outputDir:"build", // 打包出来的路径，默认叫做dist
  // assetsDir:"static", //静态资源目录 js css img fonts 常用
  // productionSourceMap:false, // 生产 soucemap文件 false 不生成  常用
   // 修改webpack配置
  chainWebpack:config=>{
    //别名 
    config.resolve.alias
      .set('_c', path.resolve('src/components'))
      .set('_v', path.resolve('src/views'));
  } 
}