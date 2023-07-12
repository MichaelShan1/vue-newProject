import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachList.vue';
import CoachRegistation from './pages/coaches/CoachRegistation.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import Notfound from './pages/Notfound.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        {
          ///coaches/id/contact
          path: 'contact',
          component: ContactCoach,
        },
      ],
    },
    { path: '/register', component: CoachRegistation },
    { path: '/requests', component: RequestReceived },
    { path: '/:notfound(.*)', component: Notfound },
  ],
});
export default router;
