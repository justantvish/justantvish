<script>
  import { initiatedOnmount } from "../../lib/utils/initiate-onmount";
  let initiated = false;
  const handleInit = () => {
    initiated = true;
  };
  initiatedOnmount(2500, handleInit);
</script>

<div class="hero-text" class:initiated>
  <p><strong>Hello, שלום, привіт!</strong> My name is</p>
  <p class="hero-greet">Anton Vishnevski.</p>
  <p>
    I'm a Frontend Developer with plenty of experience in a commercial projects.
  </p>
</div>

<style lang="scss">
  @import "../../assets/styles/variables";

  .hero {
    &-text {
      font-size: 24px;
      padding-right: 40px;
      transition:
        opacity 1.5s,
        transform 0.5s;
      opacity: 0;
      transform: translateY(30px);

      &.initiated {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &-greet {
      margin-bottom: 16px;
      font-size: 32px;
      font-weight: bold;
      color: $gray-blue;
    }
  }
</style>
