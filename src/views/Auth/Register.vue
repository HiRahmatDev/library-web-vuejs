<template>
  <div id="register">
    <div class="container-fluid">
      <div class="hero-auth">
        <h1>Book is a window<br>to the world</h1>
        <p>Photo by Mark Pan4ratte on Unsplash</p>
      </div>
      <div id="container-register">
        <a class="logo" href="">
          <img src="@/assets/img/logo.png" alt="">
        </a>
        <h1>Register</h1>
        <p>Welcome Back, Please Register<br>to Create Account</p>
        <form @submit.prevent="register" >
          <div class="grup-input">
            <label for="fullname">Full Name</label>
            <input v-model="fullname" type="text" id="fullname">
          </div>
          <div class="grup-input">
            <label for="user">Username</label>
            <input v-model="username" type="text" id="user">
          </div>
          <div class="grup-input">
            <label for="email">Email Address</label>
            <input v-model="email" type="email" id="email">
          </div>
          <div class="grup-input">
            <label for="password">Password</label>
            <input v-model="password" type="password" id="password">
          </div>
          <div class="grup-btn">
            <button class="btn btn-auth-primary">Sign in</button>
            <router-link to="/login" class="btn btn-auth-secondary">Login</router-link>
          </div>
        </form>
      </div>
      <footer>
        <p>By signing up, you agree to Book's
          <a href="#">Terms and Conditions</a>
          &
          <a href="#">Privacy Policy</a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      fullname: null,
      username: null,
      email: null,
      password: null,
      error: false,
    };
  },
  methods: {
    register() {
      axios.post('http://localhost:3333/api/v1/register', {
        fullname: this.fullname,
        username: this.username,
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.registerSuccess();
        })
        .catch(() => {
          this.registerFailed();
        });
    },
    registerSuccess() {
      if (this.fullname === null) {
        this.registerFailed();
        return;
      }
      this.error = false;
      this.$router.replace(this.$route.query.redirect || '/login');
    },
    registerFailed() {
      this.error = 'Register Failed!';
    },
  },
  updated() {
    if (localStorage.salt) {
      this.$router.replace(this.$route.query.redirect || '/dashboard');
      return;
    }
    if (this.fullname === '') {
      this.fullname = null;
    }
  },
  created() {
    if (localStorage.salt) {
      this.$router.replace(this.$route.query.redirect || '/dashboard');
    }
  },
};
</script>
