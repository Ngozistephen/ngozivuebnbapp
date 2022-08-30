
import Vue from 'vue'; 
import VueRouter from 'vue-router';
Vue.use(VueRouter); 



import HomePage from '@assets/components/HomePage.vue';
import ListingPage from '@assets/components/ListingPage.vue';
import SavedPage from  '@assets/components/SavedPage.vue';
import LoginPage from '@assets/components/LoginPage.vue';

import axios from 'axios';
import store from './store'



let router = new VueRouter({
    mode: 'history',
    routes: [ 
     { 
        path: '/',
        name: 'home',
        component: HomePage 
    },
    { 
        path: '/listing/:listing',
        name: 'listing',
        component: ListingPage 
    },

    {
        path: '/saved',
        name: 'saved',
        component: SavedPage,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },


    
    ], 

    scrollBehavior(to, from, savedPosition){
        return {
            x: 0, 
            y: 0
        }
    },

    getters: { 
        getListing(state) { return id => state.listings.find(listing => id == listing.id);
        }
    }
});


    router.beforeEach((to, from, next) => { let serverData = JSON.parse(window.vuebnb_server_data); 
        if ( to.name === 'listing' ? store.getters.getListing(to.params.listing) : store.state.listing_summaries.length > 0 || to.name ==='login') { next(); 
        
        }else if (!serverData.path || to.path !== serverData.path) {
             axios.get(`/api${to.path}`).then(({data}) => { store.commit('addData', {route: to.name, data}); next(); });
             } else {
                 store.commit('addData', {route: to.name, data: serverData});
                 serverData.saved.forEach(id => store.commit('toggleSaved', id)); next();
                }
    });

    

  

export default router;