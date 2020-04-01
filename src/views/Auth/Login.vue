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
        <form>
          <div class="grup-input">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email">
          </div>
          <div class="grup-input">
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
          </div>
          <div class="baris">
            <div class="grup-checkbox">
              <input type="checkbox" id="remember" name="remember" >
              <label for="remember">Remember me</label>
            </div>
            <a href="">Forgot Password</a>
          </div>
          <div class="grup-btn">
            <router-link to="/dashboard" class="btn btn-auth-primary">Login</router-link>
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
export default {

};
</script>
