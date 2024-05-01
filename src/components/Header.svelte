<script>
  import Logo from "./Logo.svelte";
  import Nav from "./Nav.svelte";
</script>

<header class="header">
  <div class="container">
    <div class="header-inner">
      <Logo />
      <Nav />
    </div>
  </div>
</header>

<style lang="scss">
  .header {
    width: 100%;
    flex-shrink: 1;
    position: sticky;
    z-index: 3;
    top: 0;
    background-color: rgba(8, 20, 31, 0.3);
    backdrop-filter: blur(10px);

    &-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
    }
  }
</style>
