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
      <div class="exp-position">{exp.position}</div>
      <div class="exp-company">{exp.company}</div>
    </div>
    <div class="exp-date">{exp.date}</div>
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
        margin-bottom: 8px;
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
    }

    &-position {
    }

    &-company {
    }

    &-date {
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
          margin-bottom: 8px;
        }
      }
    }
  }
</style>
