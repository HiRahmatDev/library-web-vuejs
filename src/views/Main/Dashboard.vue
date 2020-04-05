<template>
  <div class="container-fluid" :class="myClass.menuAktif" id="dashboard">
    <Navbar v-on:sendSwipe="swipeSide"
            :myClass="myClass"
            :api="api"
    />
    <Navside v-on:clickModal="tampilModal"
             v-on:sendSwipe="swipeSide"
             :myClass="myClass"
             :api="api"
    />
    <div v-if="listBook == 'List Book' || listBook == 'All Categories'"  >
      <Carousel v-bind:dbBook="api.book.result" />
    </div>
    <div v-else  >
      <Carousel class="collapse" :dbBook="api.book.result" />
    </div>
    <ListBook :dbBook="api.book.result"
              :judul="listBook"
    />
    <ModalSidebar v-on:closeModal="tampilModal"
                  :myClass="myClass" />
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
      api: {
        book: {},
        category: {},
        user: {},
      },
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
  // beforeCreate() {
  //   console.log(document.querySelectorAll('.kategori'));
  // },
  beforeMount() {
    const that = this;
    axios.get('http://localhost:8000/api/v1/book')
      .then((res) => {
        that.api.book = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get('http://localhost:8000/api/v1/category')
      .then((res) => {
        this.api.category = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`http://localhost:8000/api/v1/user/${localStorage.idUser}`)
      .then((res) => {
        that.api.user = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  // beforeUpdate() {
  //   const that = this;
  //   if (this.listBook.toLowerCase() === 'list book' ||
  // this.listBook.toLowerCase() === 'all categories') {
  //     axios.get('http://localhost:8000/api/v1/book')
  //       .then((res) => {
  //         that.api.book = res.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     axios.get(`http://localhost:8000/api/v1/book?search=${this.listBook.toLowerCase()}`)
  //       .then((res) => {
  //         that.api.book = res.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // },
  updated() {
    if (!localStorage.salt && this.$route.path !== '/login') {
      this.$router.push('/login');
      return;
    }
    const track = document.querySelector('.track');
    const carouselItem = Array.from(track.children);
    carouselItem[1].classList.add('current__slide');
    const slideWidth = track.querySelector('.current__slide').clientWidth;
    track.style.transform = `translateX(${-slideWidth}px)`;
  },
  mounted() {
    /* eslint-disable no-param-reassign */
    /* eslint-disable no-plusplus */
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

    const track = document.querySelector('.track');
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    let urutan = 1;
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
  },
};

</script>

<style lang="scss" scoped>
.collapse {
  height: 0;
}
</style>
