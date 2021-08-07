<template>
<div class="actions-header__item cart-header">
	
    <a href="#" class="cart-header__icon _icon-cart"
	
		v-on:click.prevent="$emit('active')">
		<span class="cart-header__span"
		:class="{_transform0:!cart.length}"
		>{{cart.length}}</span>
	</a>
    <div class="cart-header__body"
	:class="{_active:isActive}">
		<div class="cart-header__items"
			v-if="cart.length">
			<div class="cart-header__list cart-list"
        		v-for="item in cart" 
				v-bind:key="item.id">
				<a href="" class="cart-list__image _ibg">
                	<img :src="item.img" :alt="'product_'+item.id">
            	</a>
				<div class="cart-list__body">
					<a href="" class="cart-list__title">{{item.title}}</a>
					<div class="cart-list__price">
						<p class="cart-list__item-quantity">{{item.quantity}}</p>
						<p>&nbsp;X&nbsp;</p>
						<p class="cart-list__item-price">{{item.price}}</p>
					</div>
					<a href="" class="cart-list__delete"
						v-on:click.prevent="$emit('delete',item.id)"
					>Delete</a>
				</div>
			</div>
		</div>        
		<div 
			v-if="!cart.length" class="cart-header__empty">there are no goods here :(
		</div>
        	<p v-if="cart.length"
				class="cart-list__total-price">Total: {{total}}
			</p>    
    </div>
</div>
</template>
<script>
export default {
    	props: ['cart','total','isActive'],

	data(){
		return{



			

	}
		
	},
    computed: {
       
    },
     methods: {
         
        },
        created() {
			
        }

}
</script>

