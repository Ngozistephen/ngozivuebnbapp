import "core-js/fn/object/assign";
import Vue from 'vue';

import ListingPage from '@assets/components/ListingPage.vue';
import HomePage from '@assets/components/HomePage.vue';

import router from './router'
import App from '@assets/components/App.vue';
import store from './store';


routes: [
    {
        path: '/', 
        component: HomePage,
        name: 'home'
    },

    { 
        path: '/listing/:listing',
        component: ListingPage,
        name: 'listing'
    
    }
]

var app = new Vue({

    el:'#app',
    
    render: h => h(App), 
    router,
    store


}); 

