import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TagView from './views/TagView.vue';
import Group from './views/Group.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tag/:name',
      name: 'tag-view',
      component: TagView,
    },
    {
      path: '/group/:id',
      name: 'group',
      component: Group,
    },
  ],
});
