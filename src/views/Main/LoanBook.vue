<template>
  <div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  beforeCreate() {
    Axios.post(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book/loan/${this.$route.params.user}/${this.$route.params.book}`)
      .then(() => {
        this.$swal({
          title: 'Book Borrowed',
          text: 'Book has been borrowed!',
          icon: 'success',
          confirmButtonColor: '#FBCC38',
        });
        this.$router.push('/book/loan');
      });
  },
};
</script>
