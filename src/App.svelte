<script>
  import About from "./components/About.svelte";
  import Experience from "./components/Experience.svelte";
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero/Hero.svelte";
  import Portfolio from "./components/Portfolio.svelte";
</script>

<div class="wrapper">
  <Header />
  <main class="main">
    <Hero />
    <div class="container">
      <About />
      <Experience />
      <Portfolio />
    </div>
  </main>
</div>

<style lang="scss">
</style>
