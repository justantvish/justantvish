<script>
  import NavItem from "./NavItem.svelte";
</script>

<nav class="nav">
  <ul class="nav-list">
    <NavItem anchor="about" text="About" --delay=".2s" />
    <NavItem anchor="experience" text="Experience" --delay=".4s" />
    <NavItem anchor="portfolio" text="Portfolio" --delay=".6s" />
  </ul>
</nav>

<style lang="scss">
  .nav {
    &-list {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
