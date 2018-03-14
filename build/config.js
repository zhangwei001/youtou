/**
 * 公共构建配置文件
 */
var path = require('path');
var basePath = 'static';

module.exports = {
    dev: {
        basePath: basePath
        , publicPath: '/'
        , sourceMap: true
        , extract: false
        , iviewPath: '/static/src/'
        ,assets:"../src/assets/"
    },
    pro: {
        basePath: basePath  //dist 静态资源输出目录
        , publicPath: '/web/dist/'  //静态资源域名
        , sourceMap: true //是否启用调试sourceMap
        , extract: true //css提取
        , index: path.resolve(__dirname, '../dist/views/index.html') //入口文输出的路径
        , iviewPath:   '/web/static/src/'
        ,assets:"/web/dist/assets/"

    }
}
