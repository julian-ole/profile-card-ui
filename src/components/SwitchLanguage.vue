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
  created() {
    this.lang = window.localStorage.getItem("lang") || "RU";
  },
  watch: {
    lang(value) {
      this.$emit("switch-language", value);
    },
  },
  methods: {
    onClick() {
      this.lang = this.lang === "EN" ? "RU" : "EN";
      window.localStorage.setItem("lang", this.lang);
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
