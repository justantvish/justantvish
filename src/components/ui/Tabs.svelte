<script>
  export let data;
  let activeStyles;

  const handleTabChange = (e) => {
    const siblings = e.currentTarget.parentNode.parentNode.childNodes;
    const sibArr = Array.from(siblings);
    const tabContents = document.querySelectorAll(".tabs-content");
    sibArr.map((el) => {
      const tabBtn = el.childNodes[0];
      if (tabBtn.classList.contains("active")) {
        tabBtn.classList.remove("active");
      }
      activeStyles = `${e.currentTarget.offsetTop}px`;
    });
    e.currentTarget.classList.add("active");
    tabContents.forEach((tab) => {
      tab.classList.remove("active");
    });
    document
      .getElementById(e.currentTarget.dataset.tab)
      .classList.add("active");
  };
</script>

<div class="tabs">
  <span class="tabs-active" style="top: {activeStyles ? activeStyles : ''}"
  ></span>
  <ul class="tabs-list">
    {#each data as item, i}
      <li class="tabs-item">
        <button
          data-tab={item.anchor}
          class="tabs-btn {i === 0 ? 'active' : ''}"
          on:click={handleTabChange}
        >
          <slot name="tab-item" {item}></slot>
        </button>
      </li>
    {/each}
  </ul>

  <div class="tabs-wrapper">
    {#each data as item, i}
      <div class="tabs-content {i === 0 ? 'active' : ''}" id={item.anchor}>
        <slot name="tab-content" {item}></slot>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../../assets/styles/variables";
  .tabs {
    display: flex;
    align-items: start;
    position: relative;

    &-active {
      transition: top 0.2s linear;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      height: 65px;
      width: 4px;
      background-color: cadetblue;
      z-index: 2;
    }

    &-list {
      min-width: 260px;
      border-left: 4px solid rgba(255, 255, 255, 0.3);
    }

    &-item {
      display: block;
    }

    &-btn {
      background-color: transparent;
      color: $white;
      border: none;
      text-align: left;
      padding: 0;
      display: flex;
      align-items: center;
      position: relative;
      padding: 12px 16px;
      height: 65px;
      cursor: pointer;

      &.active {
        background-color: rgba(116, 115, 115, 0.1);
      }

      &,
      &:focus,
      &:active {
        outline: none;
        cursor: pointer;
      }

      &:hover {
        background-color: rgba(116, 115, 115, 0.1);
      }
    }
    &-wrapper {
      padding-left: 40px;
      position: relative;
      flex-grow: 1;
    }

    &-content {
      opacity: 0;
      visibility: hidden;
      position: absolute;
      inset: 0 0 0 40px;
      transition:
        opacity 0.4s,
        visibility 0.4s;

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
  }
</style>
