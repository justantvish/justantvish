<script>
</script>

<section id="portfolio" class="section">
  <h2>Projects</h2>
  <div class="projects">
    <div class="project-card_wrap">
      <div class="project-card">
        <div class="project-actions">
          <a href="" class="project-link">Github</a>
          <a href="" class="project-link">Web</a>
        </div>
        <h3 class="project-title">Project</h3>
        <p class="project-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          placeat voluptate aperiam, illo quam architecto.
        </p>
        <ul class="project-stack">
          <li class="project-stack_item">React</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../assets/styles/variables";
  .projects {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
  }

  .project {
    &-card {
      padding: 12px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 10px;

      &_wrap {
        padding: 16px;
        max-width: calc(100% / 3);
      }
    }

    &-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 16px;
    }

    &-link {
      color: $white;
      margin-left: 12px;
    }

    &-title {
      font-size: 23px;
      margin: 0 0 24px;
    }

    &-desc {
      font-size: 16px;
    }

    &-stack {
      display: flex;
      align-items: center;
      margin: 0 -12px;

      &_item {
        padding: 0 12px;
        font-size: 14px;
        color: $text-color-alt;
      }
    }
  }
</style>
