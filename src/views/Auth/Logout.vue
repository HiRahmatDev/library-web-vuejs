<script>
export default {
  name: 'Logout',
  created() {
    delete localStorage.salt;
    delete localStorage.idUser;
    this.$router.push('/login');
  },
};
</script>
