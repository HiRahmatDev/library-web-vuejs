<template>
  <div class="container-fluid" :class="myClass.menuAktif" id="dashboard">
    <Navbar v-on:sendSwipe="swipeSide" v-bind:myClass="myClass" />
    <Carousel/>
    <ListBook v-bind:dbBook="dbBook.result" />
    <Navside v-on:sendSwipe="swipeSide" v-bind:myClass="myClass" />
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/_base/Navbar.vue';
import Navside from '@/components/_base/Navside.vue';
import Carousel from '@/components/_base/Carousel.vue';
import ListBook from '@/components/_base/ListBook.vue';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Navside,
    Carousel,
    ListBook,
  },
  data() {
    return {
      myClass: {
        menuAktif: '',
        geser: 'geser-kiri',
        hiddenToLeft: '',
      },
      dbBook: null,
    };
  },
  methods: {
    swipeSide() {
      if (this.myClass.menuAktif.length > 0) {
        this.myClass.menuAktif = '';
        this.myClass.geser = 'geser-kiri';
        this.myClass.hiddenToLeft = '';
      } else if (this.myClass.menuAktif.length === 0) {
        this.myClass.menuAktif = 'menu-aktif';
        this.myClass.geser = 'geser-kanan';
        this.myClass.hiddenToLeft = 'hidden-to-left';
      }
    },
  },
  mounted() {
    axios
      .get('http://localhost:8000/api/v1/book')
      .then((res) => {
        this.dbBook = res.data;
        console.log(this.dbBook);
      });
  },
};

const burger = document.querySelectorAll('.burger a');
const menuProfil = document.getElementById('menu-profil');
const allPage = document.getElementById('dashboard');

burger.forEach((item) => {
  item.addEventListener('click', () => {
    if (menuProfil.classList.contains('geser-kiri') && allPage.classList.contains('menu-aktif') === false) {
      menuProfil.classList.replace('geser-kiri', 'geser-kanan');
      allPage.classList.toggle('menu-aktif');
      item.classList.toggle('fade-out');
    } else {
      menuProfil.classList.replace('geser-kanan', 'geser-kiri');
      allPage.classList.toggle('menu-aktif');
      item.classList.toggle('fade-out');
    }
  });
});

</script>
