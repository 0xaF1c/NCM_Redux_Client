import axios from 'axios'

axios.defaults.withCredentials = true
const http = axios.create({
  // baseURL: 'http://111.180.195.83:3000/', // 生产环境
  baseURL: 'http://localhost:19929', // 开发环境
  timeout: 60000,
  withCredentials: true,
})
// const authList = [
//   '/login/status',
//   '/likelist',
//   '/user/playlist',
//   '/like',
//   // '/recommend/resource',
//   // '/personal_fm',
//   // '/personalized',
//   '/record/recent/song',
//   // '/search/default',
// ]
http.interceptors.request.use((config) => {
  if (config.url) {
    if (config.params === undefined) {
      config.params = {}
    }
    if (localStorage.getItem('MUSIC_U') != null) {
      config.params.cookie = `MUSIC_U=${localStorage.getItem('MUSIC_U')};`
    }
    // if (authList.includes(config.url)) {
    // }
  }
  return config
})
window.http = http
export { http }