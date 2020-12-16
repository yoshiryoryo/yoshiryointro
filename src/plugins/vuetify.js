import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', 
      },
      theme: {
        themes: {
          light: {
            background: "#7cfc00",
            color: "#7cfc00"
          }
        }
      }
});
