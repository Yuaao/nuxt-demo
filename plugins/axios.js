// import axios from '@nuxtjs/axios'
// let baseURL = ''
// if (process.env.NODE_ENV === 'development') {
//     baseURL = 'http://rap2api.taobao.org/app/mock/232475'
// } else {
//     baseURL = process.env.HOST + ':' + process.env.PORT
// }
// console.log('222' + axios.get)
// //过滤请求
// axios.interceptors.request.use(config => {
//     //config 为请求的一些配置 例如：请求头 请求时间 Token  可以根据自己的项目需求个性化配置，参考axios的中文说明手册  自己多动动手
//     //由于我们项目的后端大大给力，很多东西在服务端帮我们处理好了所以请求阶段只要传好参数就好了
//     config.timeout = 10 * 1000 //请求响应时间
//     return config
// }, error => {
//     return Promise.reject(error)
// })
// // 添加响应拦截器
// axios.interceptors.response.use(
//     response => {
//         if (response.data.code === 0) {   //服务端定义的响应code码为0时请求成功
//             return Promise.resolve(response.data) //使用Promise.resolve 正常响应
//         } else if (response.data.code === 1401) { //服务端定义的响应code码为1401时为未登录
//             // store.dispatch('setUserInfo', {})
//             // Message({
//             //     message: '未登录'
//             // })
//             // // router.push('/login')
//             return Promise.reject(response.data)    //使用Promise.reject 抛出错误和异常
//         } else {
//             return Promise.reject(response.data)
//         }
//     },
//     error => {
//         if (error && error.response) {
//             let res = {}
//             res.code = error.response.status
//             res.msg = throwErr(error.response.status, error.response) //throwErr 捕捉服务端的http状态码 定义在utils工具类的方法
//             return Promise.reject(res)
//         }
//         return Promise.reject(error)
//     }
// )
// export default function ajax (method, url, data) {
//     method = method.toLocaleLowerCase()
//     if (method === 'post') {
//         return axios.post(baseURL + url, data)
//     } else if (method === 'get') {
//         return axios.get(baseURL + url, {
//             params: data
//         })
//     }
// }
