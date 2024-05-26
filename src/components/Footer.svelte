<script>
</script>

<footer class="footer">
  <ul class="social">
    <li class="social-item">
      <a
        href="https://github.com/justantvish"
        target="_blank"
        class="social-link"
      >
        <div class="social-link_inner">
          <div class="social-icon">
            <i class="icon-github"></i>
          </div>
          <div class="social-text">Github</div>
        </div>
      </a>
    </li>
    <li class="social-item">
      <a
        href="https://www.linkedin.com/in/justantvish/"
        target="_blank"
        class="social-link"
      >
        <div class="social-link_inner">
          <div class="social-icon">
            <i class="icon-linkedin"></i>
          </div>
          <div class="social-text">Linkedin</div>
        </div>
      </a>
    </li>
  </ul>
</footer>

<style lang="scss">
  @import "../assets/styles/variables";

  .footer {
    position: fixed;
    left: 0;
    top: 80px;
    width: 50px;
    z-index: 8;
  }

  .social {
    &-link {
      perspective: 1000px;
      display: inline-block;
      color: $white;
      border-radius: 4px;

      &_inner {
        position: relative;
        transition:
          transform 0.4s,
          0.5s width 0.2s;
        transform-style: preserve-3d;
        width: 60px;
        height: 60px;
        min-width: 60px;
        font-size: 32px;
        border-radius: 4px;
        // border: 2px solid $gray-blue;
        background-color: $navy;
        color: $gray-blue;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      &:hover {
        .social-link_inner {
          transform: rotateY(180deg);
          width: 180px;
        }

        .social-text {
          width: 100%;
        }
      }
    }

    &-icon {
      font-weight: bold;
      background-color: $navy;
      color: $gray-blue;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }

    &-text {
      transition: 0.5s width 0.2s;
      position: absolute;
      border-radius: 4px;
      height: 100%;
      right: 0;
      justify-content: center;
      display: flex;
      align-items: center;
      top: 0;
      color: $navy;
      background-color: #235183;
      backface-visibility: hidden;
      overflow: hidden;
      transform: rotateY(180deg);
      font-weight: bold;
      width: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
</style>
