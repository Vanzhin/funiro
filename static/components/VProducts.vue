<template>
	<section class="page__products products">
		<div class="products__container _container">
				<h2 class="products__title _title">Our Products</h2>
				<v-product-item></v-product-item>
			</div>
	</section>
</template>
<script>
import VProductItem from './VProductItem.vue'
export default {
	name:'VProducts',
	components: {
        
		VProductItem,
	},

	
	data(){
		
            }
}


</script>


