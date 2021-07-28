<template>
 <div id="app">
     <div class="wrap">
     <v-header></v-header>
     <main class="page">
            <v-main-slider></v-main-slider>
        </main>
     <v-footer></v-footer>
     </div>
 </div>
</template>

<script>


import VMainSlider from './components/VMainSlider.vue'

import VHeader from './components/VHeader.vue'
import VFooter from './components/VFooter.vue'


export default {
	name:'App',
	components: {
        
        VHeader,
        VFooter,
        VMainSlider,
	},
	data(){
		
            }
}
</script>