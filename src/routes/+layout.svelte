<svelte:head>
	<!-- Swiper's CSS -->
	<link
		rel="stylesheet"
		href="https://unpkg.com/swiper/swiper-bundle.min.css"
	/>
</svelte:head>

<script>
  import Footer from "../lib/components/Footer.svelte";
  import Header from "../lib/components/Header.svelte";

  import '../style/index.scss';
</script>

<Header />
<slot></slot>
<Footer />