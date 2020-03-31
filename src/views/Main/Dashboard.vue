<template>
  <div id="dashboard">
   <Navbar/>
   <Navside/>
  </div>
</template>

<script>
import Navbar from '@/components/_base/Navbar.vue';
import Navside from '@/components/_base/Navside.vue';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Navside,
  },
};

</script>
