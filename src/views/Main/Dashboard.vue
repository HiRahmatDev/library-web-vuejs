<template>
  <div class="container-fluid" id="dashboard">
    <Navbar v-on:burgerClicked="showSideNav"
            v-on:sort-book="sortByCategory"
            v-on:search-book="search"
            v-on:enter="hideSideNav"
            v-on:sortClicked="dDown()" />
    <Navside v-on:burgerClicked="hideSideNav"
             v-on:search-book="search"
             v-on:enter="hideSideNav"
             v-on:sort-book="sortByCategory"
             v-on:show-modal="showModal" />
    <div v-if="listBook == 'List Book' || listBook == 'All Categories'"  >
      <Carousel v-on:prevButton="prevButton"
                v-on:nextButton="nextButton"
                :dbBook="book.result" />
    </div>
    <div v-else  >
      <Carousel class="collapse" :dbBook="book.result" />
    </div>
    <ListBook :dbBook="book.result"
              :judul="listBook"
    />
    <ModalSidebar v-on:close-modal="closeModal" />
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
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
      book: {},
      listBook: 'List Book',
      counter: 1,
    };
  },
  methods: {
    loadBook() {
      const that = this;
      axios.get('http://localhost:3333/api/v1/book')
        .then((res) => {
          that.book = res.data;
        });
    },
    dDown() {
    },
    sortByCategory(sortBook) {
      this.book.result = sortBook;
    },
    search(searchBook, inputSearch) {
      this.counter = 1;
      this.book.result = searchBook;
      this.listBook = inputSearch;
    },
    showSideNav() {
      document.querySelector('#profile-menu').classList.replace('hide-sidenav', 'show-sidenav');
      document.querySelector('#dashboard').classList.add('menu-active');
      document.querySelector('.burger a').classList.add('hidden-to-left');
      document.querySelector('.nav.to-fixed').classList.add('nav-active');
    },
    hideSideNav() {
      document.querySelector('#profile-menu').classList.replace('show-sidenav', 'hide-sidenav');
      document.querySelector('#dashboard').classList.remove('menu-active');
      document.querySelector('.burger a').classList.remove('hidden-to-left');
      document.querySelector('.nav.to-fixed').classList.remove('nav-active');
    },
    prevButton() {
      const track = document.querySelector('.track');
      const currentSlide = track.querySelector('.current__slide');
      const prevSlide = currentSlide.previousElementSibling;
      if (prevSlide === null) return;
      const widthPrevSlide = prevSlide.clientWidth;
      this.counter--;
      this.zoomIn(currentSlide, prevSlide);
      track.style.transform = `translateX(${-widthPrevSlide * this.counter}px)`;
    },
    nextButton() {
      const track = document.querySelector('.track');
      const currentSlide = track.querySelector('.current__slide');
      const nextSlide = currentSlide.nextElementSibling;
      if (nextSlide === null) return;
      const widthNextSlide = nextSlide.clientWidth;
      this.counter++;
      this.zoomIn(currentSlide, nextSlide);
      track.style.transform = `translateX(${-widthNextSlide * this.counter}px)`;
    },
    zoomIn(currentSlide, targetSlide) {
      currentSlide.classList.remove('current__slide');
      targetSlide.classList.add('current__slide');
    },
    showModal() {
      document.querySelector('.bg-modal').classList.add('modal-active');
    },
    closeModal() {
      document.querySelector('.bg-modal').classList.remove('modal-active');
    },
  },
  beforeCreate() {
    if (!localStorage.token && this.$route.path !== '/login') {
      this.$router.push('/login');
    }
  },
  created() {
    this.loadBook();
  },
  updated() {
    const track = document.querySelector('.track');
    if (track.childElementCount === 2) {
      this.counter = 0;
      track.children[0].classList.add('current__slide');
    } else if (track.childElementCount > 2) {
      track.children[1].classList.add('current__slide');
      const slideWidth = track.children[1].clientWidth;
      track.style.transform = `translateX(${-slideWidth}px)`;
    } else {
      track.children[track.childElementCount - 1].classList.add('current__slide');
    }

    if (this.listBook === '') this.listBook = 'List Book';
  },
  mounted() {
    const category = document.querySelectorAll('.category-sort');
    const time = document.querySelectorAll('.time-sort');

    category.forEach((cat) => {
      cat.addEventListener('click', () => {
        cat.classList.toggle('arrow-up');
        cat.nextElementSibling.classList.toggle('muncul');
        time.forEach((ti) => {
          ti.classList.remove('arrow-up');
          ti.nextElementSibling.classList.remove('muncul');
        });
        const categoryList = Array.from(cat.nextElementSibling.children);
        categoryList.forEach((cList) => {
          cList.addEventListener('click', () => {
            category.forEach((c) => {
              c.classList.remove('arrow-up');
              c.innerHTML = cList.innerHTML;
              this.listBook = cList.innerHTML;
            });
            cat.nextElementSibling.classList.remove('muncul');
          });
        });
      });
    });
    time.forEach((ti) => {
      ti.addEventListener('click', () => {
        ti.classList.toggle('arrow-up');
        ti.nextElementSibling.classList.toggle('muncul');
        category.forEach((cat) => {
          cat.classList.remove('arrow-up');
          cat.nextElementSibling.classList.remove('muncul');
        });
        const timeList = Array.from((ti).nextElementSibling.children);
        timeList.forEach((tList) => {
          tList.addEventListener('click', () => {
            time.forEach((t) => {
              t.classList.remove('arrow-up');
              t.innerHTML = tList.innerHTML;
            });
            ti.nextElementSibling.classList.remove('muncul');
          });
        });
      });
    });
  },
};

</script>

<style lang="scss" scoped>
.collapse {
  height: 0;
}
</style>
