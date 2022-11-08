<template>
  <main>
    <SwitchLanguage @switch-language="onSwitchLanguage" />
    <AppCard :profile="profile" />
  </main>
</template>

<script>
import AppCard from "./components/Card.vue";
import SwitchLanguage from "./components/SwitchLanguage.vue";
import dataRu from "../data/profile-ru.json";
import dataEn from "../data/profile-en.json";

export default {
  components: {
    AppCard,
    SwitchLanguage,
  },
  data: () => ({
    profile: null,
  }),
  created() {
    this.profile = dataRu.profile;
  },
  methods: {
    onSwitchLanguage(lang) {
      this.profile = lang === "EN" ? dataEn.profile : dataRu.profile;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap");

body {
  color: #241f1e;
  font-family: Copperplate, Papyrus, fantasy;
  background-image: url("../public/images/bg.jpg");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  main {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    min-height: 100vh;
  }
}
</style>
