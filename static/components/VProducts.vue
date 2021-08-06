<template>
	<section class="page__products products">
		<div class="products__container _container" 
		v-bind:class="{_loading:loading}"
		>
				<h2 class="products__title _title">Our Products</h2>
				<div class="products__items">
					<v-product-item
					v-for="item in preparedItems" 
					v-bind:key="item.id"
					v-bind:item="item"
					v-on:add="$emit('add-item', $event)"
				></v-product-item>
					</div>
					
				<div class="products__footer"
				v-if="!fullShow">
					<a 
					class="products__more btn btn_white"
						@click.prevent="$emit('show-more')"
						href="#"
						>
						Show more
					</a>
				</div>
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
props: ['loading', 'preparedItems','fullShow'],
	

}


</script>


