<script>
  import Tabs from "./ui/Tabs.svelte";
  import { experience } from "../lib/data/experience";
</script>

<Tabs data={experience}>
  <div slot="tab-item" let:item={exp}>
    <div class="tabs-exp_date">{exp.date}</div>
    <div class="tabs-exp_position">
      {exp.position}
      <span class="tabs-exp_company"> &#8901; {exp.company}</span>
    </div>
  </div>
  <div slot="tab-content" let:item={exp}>
    <div class="exp-header">
      <div class="exp-header_left">
        <div class="exp-position">{exp.position}</div>
        <div class="exp-company">{exp.company}</div>
      </div>
      <div class="exp-date">{exp.date}</div>
    </div>
    <ul class="exp-actions">
      {#each exp.actions as action}
        <li class="exp-actions_item"><span>{@html action}</span></li>
      {/each}
    </ul>
  </div>
</Tabs>

<style lang="scss">
  @import "../assets/styles/variables";
  .tabs {
    &-exp {
      &_date {
        color: #8f9596;
        font-size: 13px;
        margin-block-end: 8px;
      }
      &_position {
        font-size: 14px;
        font-weight: bold;
      }

      &_company {
        color: $text-color;
        font-size: 13px;
      }
    }
  }

  .exp {
    &-header {
      background-color: rgba(116, 115, 115, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 8px;
      border-radius: 4px;
      margin-block-end: 16px;

      &_left {
        display: flex;
        align-items: center;
      }
    }

    &-position {
      font-weight: bold;
    }

    &-company {
      font-size: 16px;
      color: $gray-blue;
      display: flex;
      align-items: center;

      &:before {
        content: "";
        height: 5px;
        width: 5px;
        background-color: $gray-blue;
        border-radius: 50%;
        display: block;
        margin: 0 6px;
      }
    }

    &-date {
      color: #8f9596;
      font-size: 14px;
    }
    &-actions {
      &_item {
        display: flex;
        position: relative;
        padding-left: 16px;
        font-size: 16px;
        line-height: 1.2;

        &:before {
          content: "";
          width: 9px;
          height: 9px;
          min-width: 9px;
          border-radius: 50%;
          background-color: $gray-blue;
          position: absolute;
          left: 0;
          top: 5px;
        }

        &:not(:last-child) {
          margin-block-end: 8px;
        }
      }
    }
  }
</style>
