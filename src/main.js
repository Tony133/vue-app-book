import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import Vuelidate from "vuelidate";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuelidate);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.VUE_APP_URL;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
