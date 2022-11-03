<template>
  <button class="language-switch" @click="onClick">{{ lang }}</button>
</template>

<script>
export default {
  data() {
    return {
      lang: "RU",
    };
  },
  methods: {
    onClick() {
      this.lang = this.lang === "EN" ? "RU" : "EN";
      this.$emit("switch-language", this.lang);
    },
  },
};
</script>

<style lang="scss">
.language-switch {
  cursor: pointer;
  position: absolute;
  background-color: #888963;
  border: 1px;
  color: rgb(255 255 255);
  padding: 6px 10px;
  text-align: center;
  text-decoration: none;
  border-style: inset;
  border-radius: 15px;
  display: inline-block;
  font-size: 16px;
  font-family: Copperplate, Papyrus, fantasy;

  &:hover {
    background-color: #4e494770;
  }
}
</style>
