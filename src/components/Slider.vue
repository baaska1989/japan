<template>
  <div class="p_top_mainvisual">
    <Search />
    <VueSlickCarousel :arrows="true" :dots="false" :autoplay="true" :autoplaySpeed="6000">
    
        <span class="p_top_mainvisual_slider_item">
          <img src="@/assets/_mt/slider/1.jpg" alt="" >
        </span>

        <span class="p_top_mainvisual_slider_item" >
          <img src="@/assets/_mt/slider/2.jpg"  alt="">
        </span>

        <span class="p_top_mainvisual_slider_item">
          <img src="@/assets/_mt/slider/3.jpg" alt="">
        </span>

        <span class="p_top_mainvisual_slider_item">
          <img src="@/assets/_mt/slider/4.jpg" alt="">
        </span>

        <span class="p_top_mainvisual_slider_item">
          <img src="@/assets/_mt/slider/5.jpg" alt="">
        </span>

        <span class="p_top_mainvisual_slider_item">
          <img src="@/assets/_mt/slider/6.jpg" alt="">
        </span>

    </VueSlickCarousel>

  </div>

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Search from "@/components/Search.vue";
export default {
  name: "Slider",
  components: {VueSlickCarousel, Search },
}
</script>
<style scoped>

</style>