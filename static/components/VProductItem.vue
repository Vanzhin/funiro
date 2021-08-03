<template>
	<div class="products__items">
					<article class="products__item item-product" 
					v-for="item in preparedItems" 
					v-bind:key="item.id">
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
let API_ROOT='http://localhost:3000/api';

export default {
	data(){
		return{
			API_ROOT:'http://localhost:3000/api',  
			preparedItems: [],
			fetchedItems:[],
			itemsRerClick:4,
			addItemsCounter:0,


			

	}
		
	},
     methods: {
		//  toJson(){
		// 	 let json = JSON.stringify(this.items);
		// 	 console.log(json);


		//  },
			
            itemsDataPreparation(items,toArray) {// подготовка данных карточек товара для отображения верстки
                items.forEach(element => {
					const productData = {};
					productData.id = (element.id);
					productData.img = (element.img);
					productData.title = (element.title);
					productData.text = (element.text);
					

                    if (typeof element.price_old === 'number') {// если тип старой цены это номер  - считает какая скидка
						element.label_sale = Math.floor((element.price_old - element.price) / element.price_old * 100) + "%";
						productData.label_sale = (element.label_sale);
						productData.price_old = (element.price_old)
						

					} else {
						element.label_sale = "";
						productData.no_label_sale = true;
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
					if(element.price){// ставит точку при разделении на разряд
						element.price = element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
						productData.price = 'Rp ' + (element.price);	
						
					};
					if(element.price_old){
						element.price_old = element.price_old.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");// ставит точку при разделении на разряд
						productData.price_old = 'Rp ' + (element.price_old)		
						
					};
					toArray.push(productData);//отправляю данные в массив

					

					


				});
				this.$emit('rendering');// посылает событие rendering родителю
			},
			async fetchGoods() {
				// let response = await fetch(`${API_ROOT}/productdata`);
				// let fetchedItems = await response.json(); // читаем ответ в формате JSON
				// this.itemsDataPreparation(fetchedItems);
            try {
                const res = await fetch(`${API_ROOT}/productdata`);
				this.fetchedItems = await res.json();// получает данные с сервера из product-data.json
				this.addItems();// сразу добавляет 4 (itemsRerClick:4,) карточки товара на страницу



            } catch (error) {
                console.log(`Can't fetch data`, error);
                throw new Error(error);
            }
		},
		cloneArr(array,itemQuantity){//копирует 4 объекта из выбранного массива, каждый раз сдвигается на 4.
			const toArray = [];
			const itemsToPush = array.slice((this.addItemsCounter*itemQuantity),(this.addItemsCounter*itemQuantity + itemQuantity));
			this.addItemsCounter ++;
			console.log(itemsToPush);
			itemsToPush.forEach((item)=>{
				toArray.push(item);
			});
			return toArray;

		},
		addItems(){//отправляет массив с объетами на обработку
			this.$emit('rendering');// посылает событие rendering родителю
			this.itemsDataPreparation(this.cloneArr(this.fetchedItems, this.itemsRerClick),this.preparedItems)
		}
            
        },
        created() {
			this.fetchGoods() // подгружает данные о товарах
			
        }

}
</script>