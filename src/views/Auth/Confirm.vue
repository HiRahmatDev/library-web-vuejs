<template>
  <div>
    <h1>Pesan : {{ message }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: '',
    };
  },
  created() {
    axios.get(`http://localhost:3333/api/v1/user/confirm?key=${this.$route.query.key}`)
      .then((res) => {
        // console.log(res.headers);
        this.message = res.data.err;
      });
  },
  mounted() {
    // setTimeout(() => {
    //   this.$router.push('/login');
    // }, 3000);
  },
};
</script>
