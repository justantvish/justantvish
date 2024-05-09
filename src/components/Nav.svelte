<script>
  import NavItem from "./NavItem.svelte";
</script>

<nav class="nav">
  <ul class="nav-list">
    <NavItem anchor="about" text="About" />
    <NavItem anchor="experience" text="Experience" --delay=".2s" />
    <NavItem anchor="portfolio" text="Portfolio" --delay=".4s" />
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
