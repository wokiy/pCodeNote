/*
 * @Author: jasonlwy jasonlwy@163.com
 * @Date: 2023-01-27 14:59:26
 * @LastEditors: jasonlwy jasonlwy@163.com
 * @LastEditTime: 2023-01-27 23:24:01
 * @FilePath: /codeYD/stecode/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 'off',
    'semi': 0
  }
}
