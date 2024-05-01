<script>
  import { initiatedOnmount } from "../../lib/utils/initiate-onmount";
  let initiated = false;
  const handleInit = () => {
    initiated = true;
  };
  initiatedOnmount(600, handleInit);
</script>

<h1 class="hero-slogan" class:initiated>
  <span style="transition-delay: 0;">Crafting web solutions:</span><br />
  <span style="transition-delay: .7s;">No magic,</span>
  <span style="transition-delay: 1.4s;">just experience and passion!</span>
</h1>

<style lang="scss">
  @import "../../assets/styles/variables";
  .hero {
    &-slogan {
      font: bold 64px $f-family-alt;
      margin: 0 0 120px;

      & > span {
        transition: opacity 3s;
        opacity: 0;
      }

      &.initiated {
        & > span {
          opacity: 1;
        }
      }
    }
  }
</style>
