import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIconModules from '@element-plus/icons-vue'
import './assets/icons' // icon
import SvgIcon from '@/components/SvgIcon'//引入我们的自定一组件 svg component

const app = createApp(App)

app.use(ElementPlus)
//把SvgIcon注册成全局组件
app.component('svg-icon',SvgIcon)
Object.keys(ElIconModules).forEach(function (key) {
    app.component(ElIconModules[key].name, ElIconModules[key])
})
app.use(router).mount('#app')
