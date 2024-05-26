<script>
  import About from "./components/About.svelte";
  import Experience from "./components/Experience.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero/Hero.svelte";
  import Portfolio from "./components/Portfolio.svelte";
</script>

<div class="wrapper">
  <Header />
  <div class="main_outer">
    <Footer />
    <main class="main">
      <Hero />
      <div class="container">
        <About />
        <Experience />
        <Portfolio />
      </div>
    </main>
  </div>
</div>
