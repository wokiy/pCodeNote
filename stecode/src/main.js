/*
 * @Author: jasonlwy jasonlwy@163.com
 * @Date: 2023-01-27 14:59:26
 * @LastEditors: jasonlwy jasonlwy@163.com
 * @LastEditTime: 2023-01-27 23:22:35
 * @FilePath: /codeYD/stecode/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import 'amfe-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
