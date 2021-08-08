<template>
	<section class="page__rooms rooms">
		<div class="rooms__container _container">
			<div class="rooms__body">
				<h2 class="rooms__title _title">50+ Beautiful rooms 
inspiration</h2>
				<div class="rooms__text">Our designer already made a lot of beautiful prototipe of rooms that inspire you</div>
				<a href="" class="rooms__button btn">Explore More</a>
			</div>
			<div class="rooms__slider slider-rooms">
				<div class="slider-rooms__body">
					<div class="slider-rooms__slide swiper-wrapper">
					<v-room
					v-for="item in rooms"
					v-bind:key="item.id"
					v-bind:item="item"
						></v-room>
					</div>
					<div class="slider-rooms__arrows slider-arrows">
						<button type = "button" class="slider-arrow slider-arrow_white slider-arrow_prev _icon-arrow-down"></button>
                        <button type = "button" class="slider-arrow slider-arrow_white slider-arrow_next _icon-arrow-down"></button>
					</div>
					<div class="slider-rooms__dotts">

					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>

import VRoom from './VRoom.vue'
export default {

	name:'VRooms',
	components: {
        
		VRoom,
	},
props: ['rooms'],
	

}


</script>