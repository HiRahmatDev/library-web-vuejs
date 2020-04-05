<template>
  <div id="login">
    <div class="container-fluid">
      <div class="hero-auth">
        <h1>Book is a window<br>to the world</h1>
        <p>Photo by Mark Pan4ratte on Unsplash</p>
      </div>
      <div id="container-login">
        <a class="logo" href="">
          <img src="@/assets/img/logo.png" alt="">
        </a>
        <h1>Login</h1>
        <p>Welcome Back, Please Login<br>to Your Account</p>
        <form @submit.prevent="login">
          <div class="grup-input">
            <label for="email">Email Address</label>
            <input v-model="email" v-on:keyup.enter="submit" type="email" id="email">
          </div>
          <div class="grup-input">
            <label for="password">Password</label>
            <input v-model="password" v-on:keyup.enter="submit" type="password" id="password">
          </div>
          <div class="baris">
            <div class="grup-checkbox">
              <input type="checkbox" id="remember" name="remember" >
              <label for="remember">Remember me</label>
            </div>
            <a href="">Forgot Password</a>
          </div>
          <div v-if="error !== false" class="flash-data">
            <h2>{{ error }}</h2>
          </div>
          <div class="grup-btn">
            <button class="btn btn-auth-primary">Login</button>
            <router-link to="/register" class="btn btn-auth-secondary">Sign in</router-link>
          </div>
        </form>
      </div>
      <footer>
        <p>
          By signing up, you agree to Book's
          <a href="#">Terms and Conditions</a>
           &
          <a href="#">Privacy Policy</a></p>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: false,
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:8000/api/v1/user/login', {
        email: this.email, password: this.password,
      })
        .then((request) => {
          this.loginSuccess(request);
        })
        .catch(() => {
          this.loginFailed();
        });
    },
    loginSuccess(req) {
      if (req.data.result[0].status === 0) {
        this.loginFailed();
        return;
      }
      localStorage.salt = req.data.result[0].salt;
      localStorage.idUser = req.data.result[0].id;
      this.error = false;
      this.$router.replace(this.$route.query.redirect || '/dashboard');
    },
    loginFailed() {
      this.error = 'Login Failed!';
      delete localStorage.salt;
      delete localStorage.idUser;
    },
  },
  updated() {
    if (localStorage.salt) {
      this.$router.replace(this.$route.query.redirect || '/dashboard');
    }
  },
  created() {
    if (localStorage.salt) {
      this.$router.replace(this.$route.query.redirect || '/dashboard');
    }
  },
  mounted() {
    console.log(localStorage);
  },
};
</script>

<style lang="scss" scoped>
.flash-data {
  background-color: rgba(255, 0, 0, 0.651);
  color:rgb(255, 255, 255);
  border-radius: 3px;
  h2 {
    // font-weight: 600;
    font-size: 18px;
    padding: 14px 18px;
  }
}
</style>
