<template>
  <div :class="['card-section', { 'is-active': active }]" id="contact">
    <div class="card-content">
      <div class="card-subtitle">CONTACT</div>
      <div class="card-contact-wrapper">
        <div class="card-contact">
          <img :src="require(`../assets/icons/location.svg`)" />
          {{ contacts.address }}
        </div>
        <div class="card-contact">
          <img :src="require(`../assets/icons/phone.svg`)" />
          {{ contacts.phone }}
        </div>
        <div class="card-contact">
          <img :src="require(`../assets/icons/email.svg`)" />
          {{ contacts.email }}
        </div>
        <button class="contact-me">WORK TOGETHER</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    contacts: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.card-contact-wrapper {
  margin-top: 20px;
}

.card-contact {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #6f6f7b;
  font-family: "DM Sans", sans-serif;
  line-height: 1.6;
  cursor: pointer;

  & + & {
    margin-top: 16px;
  }

  img {
    flex-shrink: 0;
    width: 20px;
    min-height: 25px;
    margin-right: 12px;
    transition: 0.3s;
    padding-right: 12px;
    border-right: 1px solid #dfe2ec;
  }
}

.contact-me {
  border: 0;
  outline: none;
  background: linear-gradient(
    to right,
    rgba(83, 200, 239, 0.8) 0%,
    rgba(81, 106, 204, 0.8) 96%
  );
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  color: #fff;
  padding: 12px 16px;
  width: 100%;
  border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: "Jost", sans-serif;
  transition: 0.3s;
}
</style>
