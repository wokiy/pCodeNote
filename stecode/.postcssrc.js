/*
 * @Author: jasonlwy jasonlwy@163.com
 * @Date: 2023-01-27 23:25:43
 * @LastEditors: jasonlwy jasonlwy@163.com
 * @LastEditTime: 2023-01-27 23:32:50
 * @FilePath: /codeYD/stecode/.postcssrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    // 配置要使用的 PostCSS 插件
    plugins: {
      // 配置使用 autoprefixer 插件
      // 作用：生成浏览器 CSS 样式规则前缀
      // VueCLI 内部已经配置了 autoprefixer 插件
      // 所以又配置了一次，所以产生冲突了
      // 'autoprefixer': { // autoprefixer 插件的配置
      //   // 配置要兼容到的环境信息
      //   browsers: ['Android >= 4.0', 'iOS >= 8']
      // },
  
      // 配置使用 postcss-pxtorem 插件
      // 作用：把 px 转为 rem
      'postcss-pxtorem': {
        rootValue ({ file }) {
          return file.indexOf('vant') !== -1 ? 37.5 : 75
        },
        propList: ['*']
      }
    }
  }