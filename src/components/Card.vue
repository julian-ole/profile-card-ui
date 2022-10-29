<template>
  <div class="card" data-state="#about">
    <app-header
      :avatar="profile.avatar"
      :full-name="profile.fullName"
      :job-title="profile.jobTitle"
    />
    <div class="card-main">
      <app-about
        :description="profile.description"
        :socials="profile.socials"
      />
      <app-experience />
      <app-contact />
      <app-navigation />
    </div>
  </div>
</template>

<script>
import AppHeader from "./Header.vue";
import AppAbout from "./About.vue";
import AppExperience from "./Experience.vue";
import AppContact from "./Contact.vue";
import AppNavigation from "./Navigation.vue";

export default {
  components: {
    AppHeader,
    AppAbout,
    AppExperience,
    AppContact,
    AppNavigation,
  },
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.card {
  max-width: 340px;
  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);

  &[data-state="#about"] {
    height: 450px;

    .card-main {
      padding-top: 0;
    }
  }

  &[data-state="#experience"] {
    height: 550px;
  }

  &[data-state="#contact"] {
    height: 430px;
  }

  .card-main {
    position: relative;
    flex: 1;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
  }

  &.is-active {
    .card-header {
      height: 80px;
    }

    .card-header__cover {
      height: 100px;
      top: -50px;
    }

    .card-header__avatar {
      transform: none;
      left: 20px;
      width: 50px;
      height: 50px;
      bottom: 10px;
    }

    .card-header__fullname,
    .card-header__jobtitle {
      left: 86px;
      transform: none;
    }

    .card-header__fullname {
      bottom: 18px;
      font-size: 19px;
    }

    .card-header__jobtitle {
      bottom: 16px;
      letter-spacing: 1px;
      font-size: 10px;
    }
  }
}
</style>
