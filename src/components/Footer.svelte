<script>
</script>

<footer class="footer">
  <div class="footer-logo">
    <img
      src="/src/assets/img/logo.svg"
      height="40"
      width="40"
      alt="justantvish"
    />
  </div>
  <ul class="social">
    <li class="social-item">
      <a
        href="https://github.com/justantvish"
        target="_blank"
        class="social-link git"
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
        class="social-link linkedin"
      >
        <div class="social-link_inner">
          <div class="social-icon">
            <i class="icon-linkedin"></i>
          </div>
          <div class="social-text">Linkedin</div>
        </div>
      </a>
    </li>
    <li class="social-item">
      <a
        href="mailto:justantvish@gmail.com"
        class="social-link gmail"
        target="_blank"
      >
        <div class="social-link_inner">
          <div class="social-icon">
            <i class="icon-mail"></i>
          </div>
          <div class="social-text">Gmail</div>
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
    top: 0;
    bottom: 0;
    padding: 0px 5px 0;
    width: 60px;
    z-index: 8;
    background-color: rgba(0, 0, 0, 0.4);

    &-logo {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .social {
    &-link {
      perspective: 1000px;
      display: inline-block;
      color: $white;
      border-radius: 4px;

      &.git {
        .social-text {
          background-color: $git;
        }
      }

      &.linkedin {
        .social-text {
          background-color: $linkedin;
        }
      }

      &.gmail {
        .social-text {
          background-color: $gmail;
        }
      }

      &_inner {
        position: relative;
        transition:
          transform 0.4s,
          0.5s width 0.2s;
        transform-style: preserve-3d;
        width: 50px;
        height: 50px;
        min-width: 50px;
        font-size: 30px;
        border-radius: 4px;
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
