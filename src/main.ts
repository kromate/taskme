import { createApp } from 'vue'
import App from './App.vue'
import { router as setupRouter } from "@/router";

import { IonicVue } from '@ionic/vue';

import './theme/variables.css';



const init = async () => {
  const router = await setupRouter;
  const app = createApp(App);
  app.use(IonicVue)
  // await router.isReady()

  app.use(router).mount("#app");
};

init().then();


// const app = createApp(App)
//   .use(IonicVue)


// router.isReady().then(() => {
//   app.mount('#app');
// });