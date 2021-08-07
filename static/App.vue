<template>
 <div id="app">
     <div class="wrap">
     <v-header
     v-bind:cart="cart"
	 v-bind:total="total"
	 v-on:delete-item="deleteItem"
		v-on:active-click="activeChange"
		v-bind:is-active="isActive"

	 ></v-header>
     <main class="page">
            <v-main-slider></v-main-slider>
            <v-advantages></v-advantages>
            <v-products
            v-bind:prepared-items="preparedItems"
            v-on:show-more="showMore"
            v-bind:loading="loading"
            v-bind:full-show="fullShow"
			v-on:add-item="addItem"
			v-bind:cart="cart"
            ></v-products>
			<v-rooms></v-rooms>
        </main>
     <v-footer></v-footer>
     </div>
 </div>
</template>

<script>
let API_ROOT='http://localhost:3000/api';

import VMainSlider from './components/VMainSlider.vue'

import VHeader from './components/VHeader.vue'
import VFooter from './components/VFooter.vue'
import VAdvantages from './components/VAdvantages.vue'
import VProducts from './components/VProducts.vue'
import VRooms from './components/VRooms.vue'





export default {
	name:'App',
	components: {
        
        VHeader,
        VFooter,
        VMainSlider,
        VAdvantages,
		VProducts,
		VRooms,
	},
		data(){
		return{
			loading: false,
			API_ROOT:'http://localhost:3000/api',  
			preparedItems: [],
			fetchedItems:[],
			cart:[],
			itemsRerClick:4,
            addItemsCounter:0,
			fullShow:false,
			isActive: false,
		}
		
	},
          methods: {
		//  toJson(){
		// 	 let json = JSON.stringify(this.items);
		// 	 console.log(json);


		//  },

		
			activeChange(){
				this.isActive = !this.isActive;
			},

			
			activeRemove(targetClosest, classListContains, removeFrom){

 				document.addEventListener('click', (e)=> {//удаляет класс _active с элемента removeFrom если нажатие происходит не по элементам в условии

				if(!e.target.closest(targetClosest) && !e.target.classList.contains(classListContains)){
				document.querySelector(removeFrom).classList.remove('_active');
				}
				 })


			},
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
				this.loading=false;

			},
			async fetchGoods() {
				// let response = await fetch(`${API_ROOT}/productdata`);
				// let fetchedItems = await response.json(); // читаем ответ в формате JSON
				// this.itemsDataPreparation(fetchedItems);
            	try {
					this.loading=true;

                	const res = await fetch(`${API_ROOT}/productdata`);// делает запрос productdata
					this.fetchedItems = await res.json();// получает данные с сервера из product-data.json и переводит их в массив
					this.showMore();// сразу добавляет 4 (itemsRerClick:4,) карточки товара на страницу



            	} catch (error) {
                	console.log(`Can't fetch data`, error);
                	throw new Error(error);
           	 	}
			},
			async fetchCart() {
            try {
                const res = await fetch(`${API_ROOT}/cart`);// делает запрос по cart
                const cart = await res.json(); //получает ответ и представляет его в формате массива с объектами
                this.cart = cart;// приравнивает этот массив массиву cart
            } catch (error) {
                console.log(`Can't fetch cart`, error);
                throw new Error(error);
            }
        },
        addItem(item) {
            fetch(`${API_ROOT}/cart`, {//делает запрос на сервер cart
                method: 'POST', 
                body: JSON.stringify(item),//тело запроса (объект товара) переводит в формат JSON
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (response.result !== 0) {// при получении ответа
						const itemIndex = this.cart.findIndex((goodsItem) => goodsItem.id === item.id);//выводит индекс элемента, если такой есть в корзине, если нет, то выводит -1
                        if (itemIndex > -1) {
							this.cart[itemIndex].quantity += 1;// если товар есть в корзине то увеличивает количество на 1
                        } else { //если товара нет в корзине то вносит его в корзину с количеством 1
							this.cart.push({ ...item, quantity: 1});
                        }
                    } else {
                        console.error(`Can't add item to cart`, item, this.cart);
                    }
                })
        },
		async deleteItem(id) {
            const rawResponse = await fetch(`${API_ROOT}/cart/${id}`, {
                method: 'DELETE',//запрос на удаление
            });
            const response = await rawResponse.json();// получает объект из массива с товарами и переводит из json в формат объекта

            if (response.result !== 0) {// при получении ответа фильтует массив по id
                this.cart = this.cart.filter((item) => parseInt(item.id) !== parseInt(id));
            } else {
                console.error(`Can't remove item from basket`, item, this.cart);
            }
        },
		cloneArr(array,itemQuantity){//копирует 4 объекта из выбранного массива, каждый раз сдвигается на 4 (itemQuantity).
			const toArray = [];
			const itemsToPush = array.slice((this.addItemsCounter*itemQuantity),(this.addItemsCounter*itemQuantity + itemQuantity));
			this.addItemsCounter ++;
			console.log(itemsToPush);
			itemsToPush.forEach((item)=>{
				toArray.push(item);
            });
			return toArray;

		},
		showMore(){//отправляет массив с объетами на обработку
			this.loading=true;
            
            this.itemsDataPreparation(this.cloneArr(this.fetchedItems, this.itemsRerClick),this.preparedItems);
            if(this.fetchedItems.length == this.preparedItems.length){
                this.fullShow = true;
            }
		}
            
		},
		computed: {
        total() {
			// считает стоимость корзины, (currentElement.price).toString().replace(/\D/gi,'') - удаляет все кроме цифр из стоимости для того, чтобы посчитать сумму корзины
            let totalPrice = this.cart.reduce(
				(accumulator, currentElement) =>//считает общую стоимость в корзине
                    accumulator + ((currentElement.price).toString().replace(/\D/gi,'') * currentElement.quantity),
                0
			);
			return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");// после подсчета стоимости снова подставляет разделитель для разрядов
        }
    },
        created() {
			this.fetchGoods(); // подгружает данные о товарах
			this.fetchCart(); // подгружает данные о товарах в корзине
			this.activeRemove('.cart-header','actions-product__button','.cart-header__body');

			
        }

}
</script>