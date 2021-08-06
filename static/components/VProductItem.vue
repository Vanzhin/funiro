<template>
	
					<article class="products__item item-product" >
						<div class="item-product__labels">
							<div 
							 class="item-product__label item-product__label_sale" 
							 v-if="!item.no_label_sale" 
							 >{{item.label_sale}}</div>
							<div 
							v-if="item.label_new"
							class="item-product__label item-product__label_new">{{item.label_new}}</div>
						</div>
						<a href="" class="item-product__image _ibg">
								<img :src="item.img" :alt="'product_'+item.id">
						</a>
							<div class="item-product__body">
								<div class="item-product__content">
									<h5 class="item-product__title">{{item.title}}</h5>
									<div class="item-product__text">{{item.text}}</div>
								</div>
								<div class="item-product__prices">
									<div class="item-product__price">{{item.price}}</div>
									<div class="item-product__price item-product__price_old">{{item.price_old}}</div>
								</div>
								<div class="item-product__actions actions-product">
									<div class="actions-product__body">
										<a href="" v-on:click.prevent="$emit('add',item)"
										class="actions-product__button btn btn_white">Add to cart</a>
										<a href="" class="actions-product__link _icon-share">Share</a>
										<a href="" class="actions-product__link _icon-favorite">Like</a>
									</div>
									
								</div>
							</div>
					</article>
					
	
</template>
<script>

export default {
	props: ['item'],

	
}
</script>