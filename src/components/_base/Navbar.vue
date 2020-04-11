<template>
  <nav class="nav to-fixed" >
    <div class="navbar">
      <div class="burger">
        <a @click="$emit('burgerClicked')" >
          <img src="@/assets/img/svg/burger.svg" alt="">
        </a>
      </div>
      <ul>
        <li>
          <div class="category-sort">All Categories</div>
          <ul class="dropdown">
            <li @click="sort" >All Categories</li>
            <li v-for="c in category" :key="c.id" @click="sort" >{{ c.name_category }}</li>
            <!-- <li @click="sort" >Novel</li> -->
            <!-- <li @click="sort" >Pendidikan</li>
            <li @click="sort" >Filsafat</li> -->
          </ul>
        </li>
        <li>
          <div class="time-sort">All Time</div>
          <ul class="dropdown">
            <li>All Time</li>
            <li>Last hour</li>
            <li>Last week</li>
            <li>Last year</li>
          </ul>
        </li>
      </ul>
    </div>
    <form @submit.prevent="$emit('enter')" class="search">
      <div class="grup-search">
        <button><img src="@/assets/img/magnifying-glass.png" alt=""></button>
        <input v-model="inputSearch"
        @input="search" type="text" placeholder="Search book, author, category">
      </div>
    </form>
    <router-link to="/" class="logo">
      <img src="@/assets/img/logo.png" alt="Logo Library">
      <h1>Library</h1>
    </router-link>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Navbar',
  data() {
    return {
      inputSearch: null,
      category: null,
    };
  },
  methods: {
    sort(el) {
      let sortBook = [];
      if (el.target.innerHTML !== 'List Book' && el.target.innerHTML !== 'All Categories') {
        axios.get(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book?search=${el.target.innerHTML.toLowerCase()}`)
          .then((res) => {
            sortBook = res.data.result;
            this.$emit('sort-book', sortBook);
          });
      } else {
        axios.get(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book`)
          .then((res) => {
            sortBook = res.data.result;
            this.$emit('sort-book', sortBook);
          });
      }
    },
    search() {
      let searchBook = [];
      axios(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book?search=${this.inputSearch.toLowerCase()}`)
        .then((res) => {
          searchBook = res.data.result;
          this.$emit('search-book', searchBook, this.inputSearch);
        });
    },
    loadCategory() {
      const that = this;
      axios.get(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/category`)
        .then((res) => {
          that.category = res.data.result;
        });
    },
  },
  created() {
    this.loadCategory();
  },
};
</script>
