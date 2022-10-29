<template>
  <div class="card-social">
    <a v-for="social in socials" :key="social.name" :href="social.link">
      <img :src="require(`../assets/icons/${social.icon}.svg`)" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    socials: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.card-social {
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
  img {
    fill: rgb(165, 181, 206);
    width: 16px;
    display: block;
    transition: 0.3s;
  }
  a {
    color: #8797a1;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    background-color: rgba(93, 133, 193, 0.05);
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      img {
        fill: darken(rgb(165, 181, 206), 20%);
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
