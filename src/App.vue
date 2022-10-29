<template>
  <AppCard :profile="profile" />
</template>

<script>
import AppCard from "./components/Card.vue";

export default {
  components: {
    AppCard,
  },
  data: () => ({
    profile: {
      avatar: "/images/avatar.png",
      fullName: "John Lennon",
      jobTitle: "Art Musical UI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, eligendi.",
      socials: [
        {
          name: "Facebook",
          link: "#",
          icon: "facebook",
        },
        {
          name: "Twitter",
          link: "#",
          icon: "twitter",
        },
        {
          name: "Instagram",
          link: "#",
          icon: "instagram",
        },
        {
          name: "LinkedIn",
          link: "#",
          icon: "linkedin",
        },
      ],
    },
  }),
};
</script>

<style lang="scss">
body {
  color: #2b2c48;
  font-family: "Jost", sans-serif;
  background-image: url(https://images.unsplash.com/photo-1566738780863-f9608f88f3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80);

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
</style>
