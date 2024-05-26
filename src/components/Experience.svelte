<script>
  import ExperienceTabs from "./ExperienceTabs.svelte";
  import inViewport from "../lib/actions/viewportAction";
</script>

<section id="experience" class="section">
  <div
    class="experience_inner"
    use:inViewport
    on:enterViewport={(e) => {
      e.target.style.transform = "translateX(0)";
      e.target.style.opacity = "1";
    }}
  >
    <h2>Experience</h2>
    <ExperienceTabs />
  </div>
</section>

<style lang="scss">
  .experience {
    &_inner {
      transform: translateX(-90%);
      transition:
        transform 0.8s,
        opacity 0.3s;
      opacity: 0;
    }
  }
</style>
