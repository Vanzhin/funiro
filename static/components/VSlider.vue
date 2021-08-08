<template>
	<div class="slider-main__image swiper-slide _ibg">
                                        <img :src="item.src" :alt="item.title">  
                                        <a href="" data-swiper-parallax="-200" data-swiper-parallax-opacity="0"  class="slider-main__content">
                                            <div class="slider-main__title">{{item.title}}</div>
                                            <div class="slider-main__text">{{item.text}}</div>
                                            <div class="slider-main__price _icon-arrow-link">{{item.price}}</div>
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