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
      avatar: "/images/avatar.jpg",
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
      experience: [
        {
          year: "2014",
          title: "Senior Front-end Developer at JotForm",
          description: "Disrupt stumptown retro everyday carry unicorn.",
        },
        {
          year: "2016",
          title: "Middle Front-end Developer at JotForm",
          description: "Disrupt stumptown retro everyday carry unicorn.",
        },
        {
          year: "2018",
          title: "Junior Front-end Developer at JotForm",
          description: "Disrupt stumptown retro everyday carry unicorn.",
        },
        {
          year: "2020",
          title: "Front-end Developer at JotForm",
          description: "Disrupt stumptown retro everyday carry unicorn.",
        },
      ],
      contacts: {
        address: "Algonquin Rd, Three Oaks Vintage, MI, 49128",
        phone: "(269) 756-9809",
        email: "william@rocheald.com",
      },
    },
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap");

body {
  color: #2b2c48;
  font-family: "Jost", sans-serif;
  background-image: url("../public/images/bg.jpg");

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
