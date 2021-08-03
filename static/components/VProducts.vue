<template>
	<section class="page__products products">
		<div class="products__container _container" 
		v-bind:class="[{_loading: loading},products__container, _container]"
		>
				<h2 class="products__title _title">Our Products</h2>
				<!-- принимает событие rendering из ребенка и меняет переменную loading, эта переменная есть в этом компоненте а разделе return -->
				<v-product-item ref="child"
				v-on:rendering="loading = !loading"
></v-product-item>
				<div class="products__footer">
					<!-- кликаешь по ссылке а в этом компоненте, по клику исполняется метод ребенка, который прописан только в ребенке.
						в ребенке это: <v-product-item ref="child"></v-product-item>
  						в родителе это: <a @click.prevent="$refs.child.addItems()" >Show more</a> -->
						<a 
						@click.prevent="$refs.child.addItems()" 
						href="#" class="products__more btn btn_white">Show more</a>
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

	
	data(){
		return{
			loading: false,
	}
		
	},
     methods: {
			
            
		


            
        },
        created() {
			
			
        }
}


</script>


