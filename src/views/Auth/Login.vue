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
        <form @submit="login">
          <div class="grup-input">
            <label for="email">Email Address</label>
            <input v-model="email" type="email" id="email">
          </div>
          <div class="grup-input">
            <label for="password">Password</label>
            <input v-model="password" type="password" id="password">
          </div>
          <div class="baris">
            <div class="grup-checkbox">
              <input type="checkbox" id="remember" name="remember" >
              <label for="remember">Remember me</label>
            </div>
            <a href="">Forgot Password</a>
          </div>
          <div v-if="code === 1" class="flash-data error">
            <h2>{{ error }}</h2>
          </div>
          <div v-else-if="code === 2" class="flash-data warning">
            <h2>{{ error }}</h2>
          </div>
          <div class="grup-btn">
            <button type="submit" class="btn btn-auth-primary">Login</button>
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
      code: '',
    };
  },
  methods: {
    login(e) {
      e.preventDefault();

      axios.post('http://localhost:3333/api/v1/user/login', {
        email: this.email, password: this.password,
      })
        .then((request) => {
          this.loginSuccess(request);
        });
    },
    loginSuccess(req) {
      if (req.data.statusCode !== 200) {
        this.loginFailed(req);
        return;
      }
      if (req.data.result.status === 0) {
        this.needActivate(req);
        return;
      }
      localStorage.token = req.data.result.token;
      this.error = false;
      this.$router.replace(this.$route.query.redirect || '/dashboard');
    },
    loginFailed(err) {
      this.error = err.data.err;
      this.code = 1;
      delete localStorage.token;
    },
    needActivate(req) {
      const that = this;
      axios.post('http://localhost:3333/api/v1/user/send', { name: req.data.result.fullname }, {
        headers: { 'x-access-token': req.data.result.token },
      })
        .then((res) => {
          setTimeout(() => {
            console.log(res.data);
            that.error = res.data.result.msg;
            that.code = 2;
            delete localStorage.token;
          }, 5000);
        });
    },
  },
  beforeCreate() {
    if (localStorage.token) {
      this.$router.replace(this.$route.query.redirect || '/dashboard');
    }
  },
};
</script>

<style lang="scss" scoped>
.flash-data {
  border-radius: 3px;
  h2 {
    // font-weight: 600;
    font-size: 18px;
    padding: 14px 18px;
  }
}
.error {
  background-color: rgba(255, 0, 0, 0.651);
  color:rgb(255, 255, 255);
}
.warning {
  background-color: rgba(255, 182, 73, 0.87);
  color:rgb(255, 255, 255);
}
</style>
