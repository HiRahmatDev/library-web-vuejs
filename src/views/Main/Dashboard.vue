<template>
  <div class="container-fluid" :class="myClass.menuAktif" id="dashboard">
    <Navbar v-on:sendSwipe="swipeSide"
            v-bind:myClass="myClass"
            v-bind:dbCategory="dbCategory"
    />
    <Navside v-on:clickModal="tampilModal"
             v-on:sendSwipe="swipeSide"
             v-bind:myClass="myClass"
             v-bind:dbCategory="dbCategory"
    />
    <div v-if="listBook == 'List Book' || listBook == 'All Categories'"  >
      <Carousel v-bind:dbBook="dbBook.result" />
    </div>
    <div v-else  >
      <Carousel class="collapse" v-bind:dbBook="dbBook.result" />
    </div>
    <ListBook v-bind:dbBook="dbBook.result"
              v-bind:judul="listBook"
    />
    <ModalSidebar v-on:closeModal="tampilModal"
                  v-bind:myClass="myClass" />
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/_base/Navbar.vue';
import Navside from '@/components/_base/Navside.vue';
import Carousel from '@/components/_base/Carousel.vue';
import ListBook from '@/components/_base/ListBook.vue';
import ModalSidebar from '@/components/_base/ModalSidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Navside,
    Carousel,
    ListBook,
    ModalSidebar,
  },
  data() {
    return {
      myClass: {
        menuAktif: '',
        navAktif: '',
        geser: 'geser-kiri',
        hiddenToLeft: '',
        modalActive: '',
      },
      dbBook: {},
      dbCategory: {},
      listBook: 'List Book',
      query: this.$route.query,
    };
  },
  methods: {
    swipeSide() {
      if (this.myClass.menuAktif.length > 0) {
        this.myClass.menuAktif = '';
        this.myClass.navAktif = '';
        this.myClass.geser = 'geser-kiri';
        this.myClass.hiddenToLeft = '';
      } else if (this.myClass.menuAktif.length === 0) {
        this.myClass.menuAktif = 'menu-aktif';
        this.myClass.navAktif = 'nav-aktif';
        this.myClass.geser = 'geser-kanan';
        this.myClass.hiddenToLeft = 'hidden-to-left';
      }
    },
    tampilModal() {
      if (this.myClass.modalActive.length === 0) {
        this.myClass.modalActive = 'modal-active';
      } else if (this.myClass.modalActive.length > 0) {
        this.myClass.modalActive = '';
      }
    },
  },
  beforeMount() {
    console.log('hi');
  },
  mounted() {
    axios.get('http://localhost:8000/api/v1/book')
      .then((res) => {
        this.dbBook = res.data;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get('http://localhost:8000/api/v1/category')
      .then((res) => {
        this.dbCategory = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    /* eslint-disable no-param-reassign */
    /* eslint-disable no-plusplus */

    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.nav');
      const carousel = document.querySelector('.carousel');
      if (window.pageYOffset < 75) {
        nav.classList.remove('to-fixed');
        carousel.classList.remove('nav-fixed');
      } else {
        nav.classList.add('to-fixed');
        carousel.classList.add('nav-fixed');
      }
    });

    const kategori = document.querySelectorAll('.kategori');
    const waktu = document.querySelectorAll('.waktu');
    kategori.forEach((k) => {
      k.addEventListener('click', () => {
        k.nextElementSibling.classList.toggle('muncul');
        waktu.forEach((w) => {
          w.nextElementSibling.classList.remove('muncul');
        });
        const daftarKategori = Array.from(k.nextElementSibling.children);
        daftarKategori.forEach((dk) => {
          dk.addEventListener('click', () => {
            kategori.forEach((kat) => {
              kat.innerHTML = dk.innerHTML;
              this.listBook = dk.innerHTML;
            });
            k.nextElementSibling.classList.remove('muncul');
          });
        });
      });
    });
    waktu.forEach((w) => {
      w.addEventListener('click', () => {
        w.nextElementSibling.classList.toggle('muncul');
        kategori.forEach((k) => {
          k.nextElementSibling.classList.remove('muncul');
        });
        const daftarWaktu = Array.from((w).nextElementSibling.children);
        daftarWaktu.forEach((dw) => {
          dw.addEventListener('click', () => {
            waktu.forEach((wak) => {
              wak.innerHTML = dw.innerHTML;
            });
            w.nextElementSibling.classList.remove('muncul');
          });
        });
      });
    });

    window.addEventListener('load', () => {
      const track = document.querySelector('.track');
      const carouselItem = Array.from(track.children);
      carouselItem.forEach((item) => {
        item.classList.remove('current__slide');
      });
      carouselItem[1].classList.add('current__slide');
      const nextButton = document.querySelector('.next-btn');
      const prevButton = document.querySelector('.prev-btn');
      const slideWidth = track.querySelector('.current__slide').clientWidth;
      let urutan = 1;
      track.style.transform = `translateX(${-slideWidth * urutan}px)`;
      const zoomIn = (currentSlide, targetSlide) => {
        currentSlide.classList.remove('current__slide');
        targetSlide.classList.add('current__slide');
      };
      nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current__slide');
        const nextSlide = currentSlide.nextElementSibling;
        const widthNextSlide = nextSlide.clientWidth;
        zoomIn(currentSlide, nextSlide);
        urutan++;
        track.style.transform = `translateX(${-widthNextSlide * urutan}px)`;
      });
      prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current__slide');
        const prevSlide = currentSlide.previousElementSibling;
        const widthPrevSlide = prevSlide.clientWidth;
        zoomIn(currentSlide, prevSlide);
        urutan--;
        track.style.transform = `translateX(${-widthPrevSlide * urutan}px)`;
      });
    });
  },
  // updated() {
  //   const track = document.querySelector('.track');
  //   const carouselItem = Array.from(track.children);
  //   carouselItem.forEach((item) => {
  //     item.classList.remove('current__slide');
  //   });
  //   carouselItem[1].classList.add('current__slide');
  //   const nextButton = document.querySelector('.next-btn');
  //   const prevButton = document.querySelector('.prev-btn');
  //   const slideWidth = track.querySelector('.current__slide').clientWidth;
  //   let urutan = 1;
  //   track.style.transform = `translateX(${-slideWidth * urutan}px)`;
  //   const zoomIn = (currentSlide, targetSlide) => {
  //     currentSlide.classList.remove('current__slide');
  //     targetSlide.classList.add('current__slide');
  //   };
  //   nextButton.addEventListener('click', () => {
  //     const currentSlide = track.querySelector('.current__slide');
  //     const nextSlide = currentSlide.nextElementSibling;
  //     const widthNextSlide = nextSlide.clientWidth;
  //     // zoomIn(currentSlide, nextSlide);
  //     urutan++;
  //     track.style.transform = `translateX(${-widthNextSlide * urutan}px)`;
  //   });
  //   prevButton.addEventListener('click', () => {
  //     const currentSlide = track.querySelector('.current__slide');
  //     const prevSlide = currentSlide.previousElementSibling;
  //     const widthPrevSlide = prevSlide.clientWidth;
  //     zoomIn(currentSlide, prevSlide);
  //     urutan--;
  //     track.style.transform = `translateX(${-widthPrevSlide * urutan}px)`;
  //   });
  // },
};

</script>

<style lang="scss" scoped>
.collapse {
  height: 0;
}
</style>
