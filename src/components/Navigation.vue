<template>
  <div class="card-buttons">
    <button
      data-section="#about"
      :class="{ 'is-active': active === 'about' }"
      @click="onSwitchTab('about')"
    >
      ABOUT
    </button>
    <button
      data-section="#experience"
      :class="{ 'is-active': active === 'experience' }"
      @click="onSwitchTab('experience')"
    >
      EXPERIENCE
    </button>
    <button
      data-section="#contact"
      :class="{ 'is-active': active === 'contact' }"
      @click="onSwitchTab('contact')"
    >
      CONTACT
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "about",
    };
  },
  methods: {
    onSwitchTab(section) {
      this.active = section;
      this.$emit("switch", section);
    },
  },
};
</script>

<style lang="scss">
.card-buttons {
  display: flex;
  background-color: #eee3d3;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  left: 0;

  button {
    flex: 1 1 auto;
    user-select: none;
    background: 0;
    font-size: 13px;
    border: 0;
    padding: 15px 5px;
    cursor: pointer;
    color: #5c5c6d;
    transition: 0.3s;
    font-family: Copperplate, Papyrus, fantasy;
    font-weight: 500;
    outline: 0;
    border-bottom: 3px solid transparent;

    &.is-active,
    &:hover {
      color: #2b2c48;
      border-bottom: 3px solid rgb(80 97 39);
      border-width: 5px;
      background: linear-gradient(
        to bottom,
        rgba(127, 199, 231, 0) 0%,
        rgba(207, 204, 255, 0.2) 44%,
        rgb(79 96 39 / 49%) 100%
      );
    }
  }
}
</style>
