<template>
  <div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  beforeCreate() {
    Axios.patch(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book/return?id=${this.$route.params.id}`)
      .then(() => {
        this.$swal({
          title: 'Book Returned',
          text: 'Book has been returned!',
          icon: 'success',
          confirmButtonColor: '#FBCC38',
        });
        this.$router.push('/book/loan');
      });
  },
};
</script>
