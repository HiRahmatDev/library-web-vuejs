<template>
  <aside id="profile-menu" class="hide-sidenav">
    <div class="nav">
      <div class="burger">
        <a @click="$emit('burgerClicked')" >
          &times;
        </a>
      </div>
    </div>
    <div class="container center">
      <div class="foto-profil">
        <img :src="user.photo" alt="">
        <h2>{{ user.fullname }}</h2>
      </div>
    </div>
    <div class="container">
      <form @submit.prevent="$emit('enter')" class="search">
        <div class="grup-search">
          <button><img src="@/assets/img/magnifying-glass.png" alt=""></button>
          <input @input="search"
                 v-model="inputSearch" type="text" placeholder="Search book">
        </div>
      </form>
      <ul class="nav-aside">
        <li>
          <div class="category-sort">All Categories</div>
          <ul class="dropdown">
            <li @click="sort" >All Categories</li>
            <li @click="sort" >Novel</li>
            <li @click="sort" >Pendidikan</li>
            <li @click="sort" >Filsafat</li>
          </ul>
        </li>
        <li>
          <div class="time-sort">All Times</div>
          <ul class="dropdown">
            <li>All Time</li>
            <li>Newest</li>
            <li>Last hour</li>
            <li>Last week</li>
            <li>Last year</li>
          </ul>
        </li>
        <li><router-link to="book"><p>Explore</p></router-link></li>
        <li><router-link to="book/history"><p>History</p></router-link></li>
        <li><a class="panggil-modal"><p>Add Book*</p></a></li>
        <li><router-link to="/logout"><p>Log Out</p></router-link></li>
      </ul>
    </div>
  </aside>
</template>

<script>
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default {
  name: 'Navside',
  data() {
    return {
      user: {},
      inputSearch: null,
    };
  },
  methods: {
    loadUser() {
      const token = jwt.verify(localStorage.token, 'libraryku');
      const that = this;
      axios.get(`http://localhost:3333/api/v1/user/${token.id}`)
        .then((res) => {
          that.user = res.data.result;
        });
    },
    sort(el) {
      let sortBook = [];
      if (el.target.innerHTML !== 'List Book' && el.target.innerHTML !== 'All Categories') {
        axios.get(`http://localhost:3333/api/v1/book?search=${el.target.innerHTML.toLowerCase()}`)
          .then((res) => {
            sortBook = res.data.result;
            this.$emit('sort-book', sortBook);
          });
      } else {
        axios.get('http://localhost:3333/api/v1/book')
          .then((res) => {
            sortBook = res.data.result;
            this.$emit('sort-book', sortBook);
          });
      }
    },
    search() {
      let searchBook = [];
      axios(`http://localhost:3333/api/v1/book?search=${this.inputSearch.toLowerCase()}`)
        .then((res) => {
          searchBook = res.data.result;
          this.$emit('search-book', searchBook, this.inputSearch);
        });
    },
  },
  created() {
    this.loadUser();
  },
};
</script>
