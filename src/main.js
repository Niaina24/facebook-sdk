import { createApp } from 'vue';

// global stylesheet
import './styles.less';

import { initFacebookSdk, jwtInterceptor, errorInterceptor, router } from './_helpers';
import App from './App.vue';

// setup fake backend
import { fakeBackend } from './_helpers';
fakeBackend();

// enable interceptors for http requests
jwtInterceptor();
errorInterceptor();

// wait for facebook sdk to start app
initFacebookSdk().then(startApp);

function startApp() {
    createApp(App)
        .use(router)
        .mount('#app');
}