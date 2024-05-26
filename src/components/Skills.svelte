<script>
  import { skills, skillsStack } from "../lib/data/skills";
  import inViewport from "../lib/actions/viewportAction";

  const handleCard = (e) => {
    const siblings = e.currentTarget.parentNode.childNodes;
    const styles = e.currentTarget.style.transform;
    const sibArr = Array.from(siblings);

    sibArr.map((card) => {
      if (card.classList.contains("current")) {
        card.classList.remove("current");
        card.style.transform = styles;
        e.currentTarget.classList.add("current");
      }
    });
  };
</script>

<div
  class="skills"
  use:inViewport
  on:enterViewport={(e) => {
    e.target.style.transform = "translateX(0)";
    e.target.style.opacity = "1";
  }}
>
  <div class="skills-wrapper">
    {#each skillsStack as el, i (i)}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="skills-card {i === 0 ? 'current' : ''}"
        id={el}
        style="transform: translate3d(0px, -{60 * i}px, -{10 * i}px);"
        on:click={handleCard}
      >
        <div class="skills-title">{el.split("_").join(" ")}</div>
        <ul class="skills-list">
          {#each skills as skill, i (i)}
            {#if skill.stack === el}
              <li class="skills-item">{skill.name}</li>
            {/if}
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../assets/styles/variables";
  .skills {
    padding: 20px;
    border-radius: 8px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    transform: translateX(90%);
    transition:
      transform 0.8s,
      opacity 0.3s;
    opacity: 0;

    &:hover {
      &:after {
        opacity: 0;
        visibility: hidden;
      }
    }

    &-wrapper {
      -webkit-font-smoothing: antialiased;
      transform-style: preserve-3d;
      transform: rotateY(0) translateY(200px);
      transform-origin: center;
      position: relative;
      width: 100%;
      height: 100%;
      perspective: 500px;
    }

    &-card {
      transition:
        transform 0.5s ease-in-out,
        box-shadow 0.3s;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      background-color: darken($bg-color-main, 2%);
      -webkit-font-smoothing: antialiased;
      transform-style: preserve-3d;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
      padding: 12px;
      border-radius: 5px;
      min-height: 240px;

      &.current {
        transform: translate3d(0, 0, 0) !important;
      }

      &:hover {
        box-shadow: 0 0 18px rgba(0, 0, 0, 0.9);
      }
    }

    &-title {
      font-size: 28px;
      line-height: 1;
      margin-bottom: 24px;
      padding-left: 12px;
      font-family: $f-family-alt;
      text-transform: capitalize;
      cursor: pointer;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -12px;
    }

    &-item {
      padding: 12px;
      text-align: center;
      white-space: nowrap;
      min-width: 25%;
      text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3);
    }
  }
</style>
