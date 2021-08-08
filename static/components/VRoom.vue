<template>
	<div class="slider-rooms__image swiper-slide _ibg">
							<img :src="item.src" :alt="'room_'+item.title">
							<a class="slider-rooms__content _icon-arrow-link"
							data-swiper-parallax-y="-100%" data-swiper-parallax-opacity="0">
								<div class="slider-rooms__label label-slider">
									<div class="label-slider__number">{{item.id}}</div>
									<div class="label-slider__line"></div>
									<div class="label-slider__text">{{item.text}}</div>
								</div>
								<div class="slider-rooms__title">{{item.title}}</div>
							</a>
						</div>
</template>
<script>

export default {
	props: ['item'],
	methods:{
		
		
	},
	

	
}
</script>