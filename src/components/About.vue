<template>
  <div :class="['card-section', { 'is-active': active }]" id="about">
    <div class="card-content">
      <div class="card-subtitle">ABOUT</div>
      <p class="card-desc">
        {{ description }}
      </p>
    </div>
    <AppSocial v-if="hasSocial" :socials="socials" />
  </div>
</template>

<script>
import AppSocial from "./Socials.vue";

export default {
  components: {
    AppSocial,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    socials: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    hasSocial() {
      return !!this.socials.length;
    },
  },
};
</script>

<style lang="scss">
.card-subtitle {
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 8px;
}

.card-content {
  padding: 20px;
}

.card-desc {
  line-height: 1.6;
  color: rgb(11 53 48);
  font-size: 15px;
  margin: 0;
  font-weight: 400;
  font-family: Copperplate, Papyrus, fantasy;
}
</style>
