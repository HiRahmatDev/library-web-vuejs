<template>
  <div id="dashboard" class="container-fluid">
    <Navbar :namePage="namePage"
            @burgerClicked="showSideNav"
            @category-clicked="categoryDown"
            @time-clicked="timeDown"
            @sort-category="sortByCategory"
            @search-book="search"
            @enter="hideSideNav" />
    <Navside @burgerClicked="hideSideNav"
             @search-book="search"
             @enter="hideSideNav"
             @sort-category="sortByCategory"
             @show-modal="showModal" />
    <div v-if="listBook == 'List Book' || listBook == 'All Categories'"  >
      <Carousel :dbBook="book5rating"
                @prevButton="prevButton"
                @nextButton="nextButton" />
    </div>
    <div v-else  >
      <Carousel class="collapse" :dbBook="book5rating" />
    </div>
    <ListBook :book="book"
              :judul="listBook"
              @prev-page="prevPage"
              @next-page="nextPage"
    />
    <Modal :modal="modal"
           @submit-data="addBook"
           @close-modal="closeModal"
    />
    <Footer/>
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
import Modal from '@/components/_base/Modal.vue';
import Footer from '@/components/_base/Footer.vue';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Navside,
    Carousel,
    ListBook,
    Modal,
    Footer,
  },
  data() {
    return {
      namePage: '',
      book: {},
      book5rating: {},
      listBook: 'List Book',
      counter: 1,
      modal: {
        title: 'Add Book',
        button: 'Add',
        input: {
          title: '',
          author: '',
          description: '',
          category: '',
          error: '',
          code: 0,
        },
      },
    };
  },
  methods: {
    getNamePage() {
      const idName = document.querySelector('.container-fluid').id;
      this.namePage = idName;
    },
    loadBook() {
      const that = this;
      axios.get(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book`)
        .then((res) => {
          that.book = res.data;
        });
      axios.get(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book?limit=999`)
        .then((res) => {
          const rating = res.data.result.filter((book) => book.rating === 5);
          that.book5rating = rating;
        });
    },
    nextPage() {
      const that = this;
      if (this.book.nextLink) {
        axios.get(this.book.nextLink)
          .then((res) => {
            that.book = res.data;
          });
      }
    },
    prevPage() {
      const that = this;
      if (this.book.prevLink) {
        axios.get(this.book.prevLink)
          .then((res) => {
            that.book = res.data;
          });
      }
    },
    categoryDown(e) {
      const time = document.querySelectorAll('.time-sort');
      const category = document.querySelectorAll('.category-sort');
      e.classList.toggle('arrow-up');
      e.nextElementSibling.classList.toggle('muncul');
      category.forEach((cat) => {
        const list = Array.from(cat.nextElementSibling.children);
        list.forEach((l) => {
          l.addEventListener('click', () => {
            e.innerHTML = l.innerHTML;
            this.listBook = l.innerHTML;
          });
        });
      });
      time.forEach((t) => {
        if (t.nextElementSibling.classList.contains('muncul') === true) {
          this.categoryDown(t);
        }
      });

      // category.forEach((cat) => {
      //   cat.addEventListener('click', () => {
      //     cat.classList.toggle('arrow-up');
      //     cat.nextElementSibling.classList.toggle('muncul');
      //     time.forEach((ti) => {
      //       ti.classList.remove('arrow-up');
      //       ti.nextElementSibling.classList.remove('muncul');
      //     });
      //     const categoryList = Array.from(cat.nextElementSibling.children);
      //     categoryList.forEach((cList) => {
      //       cList.addEventListener('click', () => {
      //         category.forEach((c) => {
      //           c.classList.remove('arrow-up');
      //           c.innerHTML = cList.innerHTML;
      //           this.listBook = cList.innerHTML;
      //         });
      //         cat.nextElementSibling.classList.remove('muncul');
      //       });
      //     });
      //   });
      // });
      // time.forEach((ti) => {
      //   ti.addEventListener('click', () => {
      //     ti.classList.toggle('arrow-up');
      //     ti.nextElementSibling.classList.toggle('muncul');
      //     category.forEach((cat) => {
      //       cat.classList.remove('arrow-up');
      //       cat.nextElementSibling.classList.remove('muncul');
      //     });
      //     const timeList = Array.from((ti).nextElementSibling.children);
      //     timeList.forEach((tList) => {
      //       tList.addEventListener('click', () => {
      //         time.forEach((t) => {
      //           t.classList.remove('arrow-up');
      //           t.innerHTML = tList.innerHTML;
      //         });
      //         ti.nextElementSibling.classList.remove('muncul');
      //       });
      //     });
      //   });
      // });
    },
    timeDown(e) {
      const category = document.querySelectorAll('.category-sort');
      e.classList.toggle('arrow-up');
      e.nextElementSibling.classList.toggle('muncul');
      category.forEach((c) => {
        if (c.nextElementSibling.classList.contains('muncul') === true) {
          this.timeDown(c);
        }
      });
    },
    sortByCategory(sortBook) {
      this.counter = 1;
      this.book = sortBook;
      const category = document.querySelectorAll('.category-sort');
      category.forEach((c) => {
        this.categoryDown(c);
      });
    },
    search(searchBook, inputSearch) {
      this.counter = 1;
      this.book = searchBook;
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
    addBook(file) {
      const formData = new FormData();
      formData.append('title', this.modal.input.title);
      formData.append('description', this.modal.input.description);
      formData.append('author', this.modal.input.author);
      formData.append('img', file);
      formData.append('id_category', this.modal.input.category);
      const that = this;
      axios.post(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book/insert`, formData)
        .then((res) => {
          if (res.status === 200) {
            that.$router.push(`book/${res.data.result.insertId}`);
          }
        })
        .catch((err) => {
          that.modal.input.error = err;
          that.modal.input.code = 1;
        });
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
  mounted() {
  },
  updated() {
    this.getNamePage();
    const track = document.querySelector('.track');
    if (track.childElementCount === 2) {
      this.counter = 0;
      track.children[0].classList.add('current__slide');
    } else if (track.childElementCount > 2) {
      track.children.forEach((slide) => {
        slide.classList.remove('current__slide');
      });
      track.children[1].classList.add('current__slide');
      const slideWidth = track.children[1].clientWidth;
      track.style.transform = `translateX(${-slideWidth}px)`;
    } else {
      track.children[track.childElementCount - 1].classList.add('current__slide');
    }

    if (this.listBook === '') this.listBook = 'List Book';
  },
};

</script>

<style lang="scss" scoped>
.collapse {
  height: 0;
}
#dashboard {
  margin-top: 75px;
}
</style>
