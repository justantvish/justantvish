<script>
  import { initiatedOnmount } from "../lib/utils/initiate-onmount";
  const text = "Justantvish";
  const content = text
    .split("")
    .map(function (letter, i) {
      return `<span style="transition-delay: ${i * 40}ms">${letter}</span>`;
    })
    .join("");
  let initiated = false;
  const handleInit = () => {
    initiated = true;
  };
  initiatedOnmount(100, handleInit);
</script>

<strong class="logo" class:initiated>
  {@html content}
</strong>

<style lang="scss">
  .logo {
    font-size: 32px;
    font-weight: 400;
    font-family: "Righteous", cursive;
    color: #556c7f;
    opacity: 0;
    pointer-events: none;

    &.initiated {
      opacity: 1;

      span {
        transform: translateY(0);
      }
    }

    span {
      display: inline-block;
      vertical-align: top;
      transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transform: translateY(-75px);
    }
  }
</style>
