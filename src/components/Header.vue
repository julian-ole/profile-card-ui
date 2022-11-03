<template>
  <div class="card-header">
    <div class="card-header__cover"></div>
    <img class="card-header__avatar" :src="avatar" alt="avatar" />
    <h1 class="card-header__fullname">{{ fullName }}</h1>
    <h2 class="card-header__jobtitle">{{ jobTitle }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.card-header {
  position: relative;
  display: flex;
  height: 250px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;

  * {
    transition: 0.3s;
  }

  &__cover {
    width: 100%;
    height: 100%;
    position: absolute;
    height: 230px;
    top: -20%;
    left: 0;
    will-change: top;
    background-size: cover;
    background-position: center;
    background-image: url("../../public/images/avatar.jpg");
    filter: blur(20px);
    transform: scale(1.2);
    transition: 0.5s;
  }

  &__avatar {
    width: 150px;
    height: 150px;
    box-shadow: 0 0px 25px rgb(211 198 180);
    border-radius: 50%;
    object-position: center;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-64px);
  }

  &__fullname {
    position: absolute;
    bottom: 0;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    transform: translateY(-10px) translateX(-50%);
    left: 50%;
  }

  &__jobtitle {
    position: absolute;
    bottom: 0;
    font-size: 11px;
    white-space: nowrap;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-7px);
  }
}
</style>
