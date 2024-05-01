<script>
  import { initiatedOnmount } from "../lib/utils/initiate-onmount";
  export let anchor;
  export let text;
  let initiated = false;
  const handleInit = () => {
    initiated = true;
  };
  initiatedOnmount(200, handleInit);
</script>

<li class="nav-item" class:initiated>
  <a href="#{anchor}" class="nav-link">{text}</a>
</li>

<style lang="scss">
  .nav {
    &-item {
      transition:
        transform 0.3s,
        opacity 0.5s;
      padding: 0 15px;
      transform: translateY(-75px);
      opacity: 0;
      transition-delay: var(--delay, 0);

      &.initiated {
        transform: translateY(0);
        opacity: 1;
      }
    }

    &-link {
      font-size: 24px;
      color: #556c7f;
    }
  }
</style>
