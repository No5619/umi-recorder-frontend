export default {
    install(Vue) {
        Vue.prototype.$cache = {
            loggedin: false
        }
    }
}