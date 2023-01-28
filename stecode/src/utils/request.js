/*
 * @Author: jasonlwy jasonlwy@163.com
 * @Date: 2023-01-27 23:39:17
 * @LastEditors: jasonlwy jasonlwy@163.com
 * @LastEditTime: 2023-01-27 23:41:58
 * @FilePath: /codeYD/stecode/src/utils/request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios"

const instance = axios.create({
    baseURL: "http://ttapi.research.itcast.cn/"
})
// 我们把每一个请求都封装成每个独立的功能函数，在需要的时候加载调用，这种做法更便于接口的管理和维
export default instance