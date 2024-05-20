<script>
  import inViewport from "../lib/actions/viewportAction";
  import Skills from "./Skills.svelte";
</script>

<section id="about" class="section about">
  <div class="about-block">
    <div
      class="about-text"
      use:inViewport
      on:enterViewport={(e) => {
        e.target.style.transform = "translateX(0)";
        e.target.style.opacity = "1";
      }}
    >
      <h2>About me</h2>
      <p>
        With over 8 years of frontend development experience in a wide range of
        projects, I'm a self-taught, passionate expert in frontend technologies.
        From crafting B2B SaaS platforms to designing captivating landing pages,
        building multi-page websites, enhancing e-shops and many more, I've
        tackled diverse challenges. As a great problem-solver and bug-fixer, I
        turn ideas into seamless and responsive web experiences across various
        domains.
      </p>
      <p>
        Beyond my development prowess, I have a passion for sharing knowledge
        and mentoring others. I bring with me valuable teaching experience,
        having led lectures and mentored aspiring developers in the art of
        frontend development. Moreover, my leadership skills shine through as
        I've successfully managed and coordinated a team, fostering
        collaboration and delivering great results.
      </p>
      <p>Let's get together and create something remarkable!</p>
    </div>
    <Skills />
  </div>
</section>

<style lang="scss">
  .about {
    &-block {
      display: flex;
    }

    &-text {
      width: 50%;
      padding-right: 50px;
      transform: translateX(-100%);
      transition:
        transform 0.8s,
        opacity 0.3s;
      opacity: 0;
    }
  }
</style>
