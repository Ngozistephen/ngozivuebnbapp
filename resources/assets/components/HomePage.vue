<template>
    <div class="home-container"> 
        <listing-summary-group v-for="(group, country) in listing_groups"
            :key="country" :listings="group" :country="country" class="listing-summary-group">
        ></listing-summary-group>


        <!-- <div v-for="(group,country) in listing_groups" class="listing-summary-group">
            <h1> Place in {{ country}}</h1>
                <div class="listing-summaries">
                    <listing-summary v-for="listing in group" 
                        :key ="listing.id" 
                        :listing ="listing">
                    </listing-summary>
                </div>
        </div> -->
     </div>
</template>

<script>
    import { groupByCountry } from '@assets/js/helpers';
    // import ListingSummary from './ListingSummary.vue';
    import ListingSummaryGroup from './ListingSummaryGroup.vue';
    import axios from 'axios';
      
    
    

    let serverData = JSON.parse(window.vuebnb_server_data);
    let listing_groups = groupByCountry(serverData.listings);


    export default{

        // mixins: [ routeMixin],

        data(){
            return{ 
                listing_groups:[]
             }
        },
        methods: { 
            assignData({ listings }) { this.listing_groups = groupByCountry(listings); }, 
            
        },
        computed: {
            listing_groups() { 
                return groupByCountry(this.$store.state.listing_summaries); 
            }
        },

        components:{
            // ListingSummary,
            ListingSummaryGroup
        },

        beforeRouteEnter(to, from, next) {
            let serverData = JSON.parse(window.vuebnb_server_data);
                 if (to.path === serverData.path) { 
                    let listing_groups = groupByCountry(serverData.listings); 
                    next(component => component.listing_groups = listing_groups); }
                 else { 
                    console.log('Need to get data with AJAX!'); next(false);
                  }
        },

        
        
        
    }
</script>
<style>
    .home-container { 
        margin: 0 auto;
        padding: 0 25px; 
         
    } 
    
    @media (min-width: 1131px) {

        .home-container { width: 1080px; }
    }

    .listing-summary-group { padding-bottom: 20px; }

    .listing-summaries { 
        display: flex;
        flex-direction: row; 
        justify-content: space-between;
        overflow: hidden;
    } 

    .listing-summaries > .listing-summary { 
        margin-right: 15px; 
    }

    .listing-summaries > .listing-summary:last-child {
         margin-right: 0;
    }
</style> 