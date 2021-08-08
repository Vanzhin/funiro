<template>
<section class="page__main-slider">
   
                <div class="main-slider__container _container">
                    <div class="main-slider__body">
                        <div class="main-slider__content content-main">
                            <h1 class="content-main__title">High-Quality
                                Furniture Just
                                For You</h1>
                            <div class="content-main__text">Our furniture is made from selected and best quality materials that are suitable for your dream home</div>
                            <a href="" data-da=".slider-main__body,991.98" class="content-main__button btn">Shop Now</a>
                        </div>
                        <div class="main-slider__slider slider-main">
                            <div class="slider-main__controls controls-slider-main">
                                <div class="controls-slider-main__dots"></div>
                                <div class="controls-slider-main__arrows slider-arrows">
                                    <button type = "button" class="slider-arrow slider-arrow_prev _icon-arrow-down"></button>
                                    <button type = "button" class="slider-arrow slider-arrow_next _icon-arrow-down"></button>
                                </div>
                            </div>
                            <div class="slider-main__body">
                                <div class="slider-main__slide swiper-wrapper">
                                <v-slider
                                v-for="item in slides"
					            v-bind:key="item.id"
					            v-bind:item="item"
                                ></v-slider>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>	
</template>
<script>

import VSlider from './VSlider.vue'
export default {

	name:'VMainSlider',
	components: {
        
		VSlider,
	},
props: ['slides'],
	

}


</script>

