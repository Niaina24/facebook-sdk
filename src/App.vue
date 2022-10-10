<template>
    <!-- nav -->
    <nav class="navbar navbar-expand navbar-dark bg-dark" v-if="account">
        <div class="navbar-nav">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <a class="nav-item nav-link" @click="logout">Logout</a>
        </div>
    </nav>

    <!-- main app container -->
    <div class="container pt-4">
        <router-view></router-view>
    </div>

    <!-- credits -->
    <div class="text-center mt-4">
        <p>
            <a href="https://jasonwatmore.com/post/2020/10/06/vue-3-facebook-login-tutorial-example" target="_blank">Vue 3 - Facebook Login Example & Tutorial</a>
        </p>
        <p>
            <a href="https://jasonwatmore.com" target="_blank">JasonWatmore.com</a>
        </p>
    </div>
</template>

<script>
import { ref } from 'vue';

import { accountService } from '@/_services';

export default {
    setup() {
        const account = ref(null);
        accountService.account.subscribe(x => account.value = x);

        return {
            account,
            logout: accountService.logout
        }
    }
}
</script>