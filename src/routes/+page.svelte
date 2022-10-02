<svelte:head>
	<!-- Swiper's CSS -->
	<link
		rel="stylesheet"
		href="https://unpkg.com/swiper/swiper-bundle.min.css"
	/>
</svelte:head>

<script>
  import Slide from "../lib/Slide.svelte";

  // Import Swiper Svelte components
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  import { Swiper } from 'swiper/svelte';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  export let data;
  const slides = data.sliders.data;
</script>

<h1>Home <span>Page</span></h1>
<Swiper
    id="heroimage"
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    navigation
    pagination={{ clickable: true }}
  >
  { #each slides as slide }
    <Slide slide={slide} />
  {/each}
</Swiper>