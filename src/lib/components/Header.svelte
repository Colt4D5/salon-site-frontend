<script context="module">
  import {nav} from '../navigation';
</script>

<header>
  <div id="top-bar" class="">
    <div class="inner">
      <a href="/">
        <img id="logo" src="http://aurea.imaginalmarketing.net/wp-content/uploads/2022/07/aurea-logo-clr.webp" alt="Site Name | Site Location" />
      </a>
      <div id="nav-wrapper">
        <nav id="nav-main">
          <ul>
            {#each nav as item}
              <li><a href={item.link}>{item.title}</a></li>
            {/each}
          </ul>
        </nav><!-- #nav -->
          <div id="morelinks">
            <a href="/book-online/">Book Online</a>
            <a href="/gift-cards/">Gift Cards</a>
          </div>
        </div>
      <div id="menuicon"><i class="fa-solid fa-bars"></i></div>
    </div>
  </div>
</header>