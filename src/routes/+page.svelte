<script>
  import Slide from "$lib/components/Slide.svelte";
  import Intro from "$lib/components/intros/Intro.1.svelte";
  import Promo from "$lib/components/promos/Promo.3.svelte";
  import Subfooter from "../lib/components/subfooters/Subfooter.1.svelte";

  // Import Swiper Svelte components
  import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
  import { Swiper } from 'swiper/svelte';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';

  export let data;
  const slides = data.slides.sliders.data;
  const promos = data.promos.promos.data;
</script>

<Swiper
    id="heroimage"
    modules={[Navigation, Pagination, Autoplay, A11y]}
    navigation
    autoplay={{ delay: 6000 }}
    pagination={{ clickable: true }}
  >
  { #each slides as slide }
    <Slide {slide} />
  {/each}
</Swiper>

<main>

  <Intro />
  
  <section id="promos" aria-label="Promos">
    <div id="promos-wrapper" class="row">
      {#each promos as promo}
        <Promo {promo} />
      {/each}
      </div>
    <div class="clear"></div>
  </section>
  
  <Subfooter />

</main>