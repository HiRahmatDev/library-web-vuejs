<template>
  <div class="container-fluid" :class="myClass.menuAktif" id="dashboard">
    <Navbar v-on:sendSwipe="swipeSide" v-bind:myClass="myClass" />
    <Carousel/>
    <ListBook v-bind:books="books" />
    <Navside v-on:sendSwipe="swipeSide" v-bind:myClass="myClass" />
  </div>
</template>

<script>
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
  data() {
    return {
      myClass: {
        menuAktif: '',
        geser: 'geser-kiri',
        hiddenToLeft: '',
      },
      books: [
        {
          id: 1,
          title: 'Dilan 1990',
          description: 'Lorem impsumdak asdflja dfuh',
          author: 'Pidi Baiq',
          img: 'https://ssvr.bukukita.com/babacms/displaybuku/74492_f.jpg',
        },
        {
          id: 2,
          title: 'Sebuah Seni untuk bersikap bodo amat',
          description: 'Lorem impsumdak asdflja dfuh',
          author: 'Pidi Ga Baiq',
          img: '/img/thumb-buku2.png',
        },
        {
          id: 3,
          title: 'React JS Crash Course',
          description: 'Lorem impsumdak asdflja dfuh',
          author: 'Rahmat Hidayatullah',
          img: '/img/thumb-buku3.png',
        },
        {
          id: 4,
          title: 'React JS Crash Course',
          description: 'Lorem impsumdak asdflja dfuh',
          author: 'Rahmat Hidayatullah',
          img: '/img/thumb-buku3.png',
        },
        {
          id: 5,
          title: 'Vue Js',
          description: 'Lorem impsumdak asdflja dfuh',
          author: 'Rahmat Hidayatullah',
          img: '/img/thumb-buku3.png',
        },
      ],
    };
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

<style lang="scss" scoped>

</style>
