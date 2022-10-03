<script>
  import Footer from "../lib/components/Footer.svelte";
  import Header from "../lib/components/Header.svelte";

  import '../style/index.scss';
</script>

<!-- <!DOCTYPE html> -->
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Aurea Salon | Some Place, NA</title>
		
		<!-- Swiper's CSS -->
		<link
			rel="stylesheet"
			href="https://unpkg.com/swiper/swiper-bundle.min.css"
		/>

		<!-- Font Awesome 5 -->
		<script src="https://kit.fontawesome.com/e507922f2a.js" crossorigin="anonymous"></script>
  </head>
  <body class="home">

		<main>
			<Header />
			<slot></slot>
		</main>
		
		<Footer />

	</body>
</html>