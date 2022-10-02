<script>
  export let slide;
  const desktopImg = slide.attributes.img_full.data.attributes.url;
  const mobileImg = slide.attributes.img_mobile.data.attributes.url;
  const { title, content } = slide.attributes;
  
  import { SwiperSlide } from 'swiper/svelte';
</script>

<SwiperSlide>

  <picture>
    <source media="(max-width: 799px)" srcset="http://localhost:1337{mobileImg}">
    <source media="(min-width: 800px)" srcset="http://localhost:1337{desktopImg}">
    <img src="http://localhost:1337{desktopImg}" alt={ title } />
  </picture>

  <div class="slide_text">
    <div class="slide_text_inner">
      {@html content }
    </div>
  </div>

</SwiperSlide>