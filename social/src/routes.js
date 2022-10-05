import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import ProfilePage from './pages/ProfilePage.vue';
import ProfileEdittingPage from './pages/ProfileEdittingPage.vue';
import SearchPage from './pages/SearchPage.vue';

import { createRouter, createWebHistory } from 'vue-router';
import { getJwtToken } from './apis/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/profile/edit',
    name: 'profileEdit',
    component: ProfileEdittingPage
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

// 登录页面自动跳转逻辑
router.beforeEach((to) => {
  if (to.name !== "login" && !getJwtToken()) {
    return { name: "login" };
  }
  if (to.name === "login" && getJwtToken()) {
    return { name: "home" };
  }
})

export { router };