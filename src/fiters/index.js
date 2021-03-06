import Vue from 'vue'
// import moment from 'moment'
import { format } from 'date-fns'
// 自定义过滤器
Vue.filter('date-format', function (value, formatStr='yyyy-MM-dd') {
  // return moment(value).format(formatStr)
  return format(value, formatStr)
})
