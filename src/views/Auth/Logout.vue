<template>
  <div></div>
</template>

<script>
export default {
  name: 'Logout',
  mounted() {
    delete localStorage.token;
    this.$router.push('/login');
  },
};
</script>
