<script>
  import { projects } from "../lib/data/projects";
  import inViewport from "../lib/actions/viewportAction";
</script>

<section id="portfolio" class="section">
  <div
    class="projects_inner"
    use:inViewport
    on:enterViewport={(e) => {
      e.target.style.transform = "translateX(0)";
      e.target.style.opacity = "1";
    }}
  >
    <h2>Projects</h2>
    <div class="projects">
      {#each projects as project}
        <div class="project-card_wrap">
          <div class="project-card">
            <div class="project-actions">
              <a href={project.linkGit} class="project-link" target="_blank"
                >Github</a
              >
              <a href={project.link} class="project-link" target="_blank">Web</a
              >
            </div>
            <h3 class="project-title">{project.name}</h3>
            <p class="project-desc">{project.description}</p>
            <ul class="project-stack">
              {#each project.stack as item}
                <li class="project-stack_item">{item}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
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
  </div>
</section>

<style lang="scss">
  @import "../assets/styles/variables";
  .projects {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;

    &_inner {
      transform: translateX(-90%);
      transition:
        transform 0.8s,
        opacity 0.3s;
      opacity: 0;
    }
  }

  .project {
    &-card {
      padding: 12px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      height: 100%;

      &_wrap {
        padding: 16px;
        max-width: calc(100% / 3);
      }
    }

    &-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 8px;
    }

    &-link {
      transition: color 0.3s;
      text-shadow: 2px 2px 5px $text-color;
      color: $white;
      margin-left: 12px;

      &:hover {
        color: $text-color;
      }
    }

    &-title {
      font-size: 23px;
      color: $text-color;
      margin: 0 0 18px;
    }

    &-desc {
      font-size: 16px;
    }

    &-stack {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      gap: 3px;

      &_item {
        padding: 3px;
        border-radius: 2px;
        background-color: $bg-color-alt;
        font-size: 12px;
        line-height: 1;
        color: $navy;
      }
    }
  }
</style>
