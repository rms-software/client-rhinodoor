import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './style.scss';

import translations_en from "./translations/en.json";
import translations_nl from "./translations/nl.json";

window.trans = {
  en: translations_en,
  nl: translations_nl
}

window.lang = "nl";

Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
