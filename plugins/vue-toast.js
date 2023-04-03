import 'vue-toast-notification/dist/theme-default.css'
import ToastPlugin from 'vue-toast-notification'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ToastPlugin, {
    positon: 'top',
  })
})
