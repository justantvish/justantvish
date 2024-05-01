<script>
  import HeroGreet from "./HeroGreet.svelte";
  import HeroSlogan from "./HeroSlogan.svelte";
</script>

<div class="hero">
  <div class="hero-bg"></div>
  <div class="container">
    <div class="hero-inner">
      <HeroSlogan />
      <HeroGreet />
    </div>
  </div>
</div>

<style lang="scss">
  .hero {
    margin-top: -70px;
    position: relative;

    &-inner {
      display: flex;
      position: relative;
      z-index: 2;
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      width: 100%;
      min-height: 100vh;
      padding: 70px 0 70px;
    }

    &-bg {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      /* background-image: url("/src/assets/img/Justantvish3.JPG"); */
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      &:after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.9);
      }
    }
  }
</style>
