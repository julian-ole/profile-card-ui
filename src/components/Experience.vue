<template>
  <div :class="['card-section', { 'is-active': active }]" id="experience">
    <div class="card-content">
      <div class="card-subtitle">WORK EXPERIENCE</div>
      <div v-if="hasExperience" class="card-timeline">
        <div
          v-for="(item, index) in experience"
          :key="index"
          class="card-item"
          :data-year="item.year"
        >
          <div class="card-item-title">{{ item.title }}</div>
          <div class="card-item-desc">{{ item.description }}</div>
        </div>
      </div>
      <div v-else>Nothing yet.</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    experience: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    hasExperience() {
      return !!this.experience.length;
    },
  },
};
</script>

<style lang="scss">
.card-timeline {
  margin-top: 30px;
  position: relative;

  &:after {
    background: linear-gradient(
      to top,
      rgba(134, 214, 243, 0) 0%,
      rgb(79 96 39)
    );
    content: "";
    left: 42px;
    width: 2px;
    top: 0;
    height: 100%;
    position: absolute;
    content: "";
  }

  .card-item {
    position: relative;
    padding-left: 60px;
    padding-right: 20px;
    padding-bottom: 30px;
    z-index: 1;
    &:last-child {
      padding-bottom: 5px;
    }

    &:after {
      content: attr(data-year);
      width: 10px;
      position: absolute;
      top: 0;
      left: 36px;
      width: 9px;
      height: 8px;
      line-height: 0.6;
      border: 2px solid #898d7e;
      font-size: 14px;
      text-indent: -44px;
      border-radius: 50%;
      color: rgb(43 44 72 / 66%);
      background: #4f6027;
    }
  }

  .card-item-title {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .card-item-desc {
    font-size: 13px;
    color: #2b2c48;
    line-height: 1.5;
    font-family: Copperplate, Papyrus, fantasy;
  }
}
</style>
