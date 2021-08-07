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
										<a href="" 
											v-on:click.prevent="$emit('add',item)"
											class="actions-product__button btn btn_white">
											<span
												v-if="isInCart">In cart
											</span>
											<span
												v-if="!isInCart">Add to cart
											</span>
										</a>
										<a href="" class="actions-product__link _icon-share">Share</a>
										<a href="" class="actions-product__link _icon-favorite">Like</a>
									</div>
									
								</div>
							</div>
					</article>
					
	
</template>
<script>

export default {
	props: ['item', "cart"],
	methods:{
		
		
	},
	computed: { //раздел экземпляра, где вычисления происходят при обновлении данных
		isInCart(){
			const itemIndex = this.cart.findIndex((goodsItem) => goodsItem.id === this.item.id);//перебирает массив cart и смотрит, если id элемента корзины равен  id элемента товара, если совпадение выдает индекс элемента, если нет то -1	
			if (itemIndex > -1) {
				return true
            } else { //если товара нет в корзине то вносит его в корзину с количеством 1
				return false
            }
		}
	}
	

	
}
</script>