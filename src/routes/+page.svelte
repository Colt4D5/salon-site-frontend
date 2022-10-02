<script>
  import Slide from "../lib/components/Slide.svelte";

  // Import Swiper Svelte components
  import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
  import { Swiper } from 'swiper/svelte';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';

  export let data;
  const slides = data.sliders.data;
</script>

<Swiper
    id="heroimage"
    modules={[Navigation, Pagination, Autoplay, A11y]}
    navigation
    autoplay={{ delay: 6000 }}
    pagination={{ clickable: true }}
  >
  { #each slides as slide }
    <Slide slide={slide} />
  {/each}
</Swiper>