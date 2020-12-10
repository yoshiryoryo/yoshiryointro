import Vue from "vue";
import Router from "vue-router";
import Home from '../views/Home.vue';
import Skill from '../views/Skill.vue';
import About from '../views/About.vue';
import Work from '../views/Work.vue';

// 表示するコンポーネントをimport

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    //ルーティングの設定
    { path:'/', component: Home},
    { path:'/skill', component: Skill},
    { path:'/about', component: About},
    { path:'/work', component: Work},
  ]
});