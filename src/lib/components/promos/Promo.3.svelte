<script>
  export let promo;
  const { link, content, cta } = promo.attributes;
  const image = promo.attributes.image.data.attributes.url;
</script>

<div class="promo-box">
    <a class="promo-link" href={link}>
      <div class="photo" style="background-image: url(http://localhost:1337{image});"></div>
    <div class="promo_text">
      <h3>{cta}</h3>
    </div>
  </a>
</div>