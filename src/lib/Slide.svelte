<script>
  export let slide;
  
  import { SwiperSlide } from 'swiper/svelte';
</script>

<SwiperSlide>
  <picture>
    <source media="(max-width: 799px)" srcset="http://localhost:1337{slide.attributes.img_mobile.data.attributes.url}">
    <source media="(min-width: 800px)" srcset="http://localhost:1337{slide.attributes.img_full.data.attributes.url}">
    <img src="http://localhost:1337{slide.attributes.img_full.data.attributes.url}" alt="{ slide.attributes.title }" />
  </picture>
</SwiperSlide>