<template>
	<div class="products__items">
					<article :data-pid="preparedItems.id" class="products__item item-product" v-for="item in preparedItems" v-bind:key="item.id">
						<div class="item-product__labels">
							<div class="item-product__label item-product__label_sale">{{item.label_sale}}</div>
							<div class="item-product__label item-product__label_new">{{item.label_new}}</div>
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
										<a href="" class="actions-product__button btn btn_white">Add to cart</a>
										<a href="" class="actions-product__link _icon-share">Share</a>
										<a href="" class="actions-product__link _icon-favorite">Like</a>
									</div>
									
								</div>
							</div>
					</article>
	</div>
</template>
<script>
export default {
	data(){
		return{
			preparedItems: [],
			items:[{
			id:"1",
			label_new:true,
			img:"static/img/products/01.jpg",
			title:"Syltherine",
			text:"Stylish cafe chair",
			price:2500000,
			price_old:3500000
		},
		{
			id:"2",
			label_new:false,
			img:"static/img/products/02.jpg",
			title:"Leviosa",
			text:"Stylish cafe chair",
			price:2500000,
			price_old:3500000
		},
		{
			id:"3",
			label_new:true,
			img:"static/img/products/03.jpg",
			title:"Lolito",
			text:"Luxury big sofa",
			price:7000000,
			price_old:14000000
		},{id:"4",
			label_new:false,
			img:"static/img/products/04.jpg",
			title:"Respira",
			text:"Minimalist fan",
			price:500000,
			price_old: ""
		}],

	}
		
	},
     methods: {
			divideNumberByPieces(x, delimiter) {
  			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
			},
        
            itemsDataPreparation() {
				
                this.items.forEach(element => {
					const productData = {};
					productData.id = (element.id);
					productData.img = (element.img);
					productData.title = (element.title);
					productData.text = (element.text);
					

                    if (typeof element.price_old === 'number') {
						element.label_sale = Math.floor((element.price_old - element.price) / element.price_old * 100) + "%";
						productData.label_sale = (element.label_sale);
						productData.price_old = (element.price_old)
						

					} else {
						element.label_sale = "";
						element.price_old = '';
						productData.label_sale = (element.label_sale);
						productData.price_old = (element.price_old)


						


					};
					if (element.label_new) {
						element.label_new = "New"
                        productData.label_new = (element.label_new)
					} else {
						element.label_new = '';
						productData.label_new = (element.label_new)
					};
					if(element.price){
						element.price = this.divideNumberByPieces(element.price, ",");
						productData.price = 'Rp ' + (element.price)		
						
					};
					if(element.price_old){
						element.price_old = this.divideNumberByPieces(element.price_old, ",");
						productData.price_old = 'Rp ' + (element.price_old)		
						
					};
					this.preparedItems.push(productData);

					


				});
				
                console.log(this.preparedItems);

            },
            
        },
        created() {
            this.itemsDataPreparation();
        }

}
</script>