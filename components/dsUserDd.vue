<template>
  <b-dropdown
    variant="link"
    size="large">
    <template slot="button-content">
      <img
        src="https://www.gravatar.com/avatar/ccfbdc2db4a476d423bf912c3026e677?s=80&d=retro"
        alt="user photo"
        class="user-avatar">
    </template>
    <b-dropdown-item>
      Мой профиль
    </b-dropdown-item>
    <b-dropdown-item>
      Выйти
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
  export default {
    name: "DsUserDd"
  }
</script>

<style scoped>
  .user-avatar {
    max-height: 40px;
    border-radius: 50%;
  }
</style>
