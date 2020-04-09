<template>
  <div id="landing">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div class="overflow-hidden">
      <div class="container">
        <p class="greeting text-center h1 mt-5">Welcome to</p>
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col-auto d-flex flex-nowrap
                align-items-end my-md-0 mt-4 mb-2 ml-md-0 mx-auto">
                <img class="logo" src="@/assets/img/logo@4x.png" alt="Library Arkademy Logo">
                <p class="text-logo mb-md-3 mb-1">Library</p>
              </div>
            </div>
          </div>
          <div class="d-xl-flex d-none gambar-hero">
            <img src="@/assets/img/undraw_book_lover_mkck.png" alt="">
          </div>
        </div>
        <div class="row">
          <h1 class="h1 col-xl-5 col-lg-auto col-md-auto col-sm-auto
            col-auto mt-3 text-md-left text-center">
            The Best Online Library Platform in the World
            </h1>
        </div>
        <div class="row align-items-end justify-content-md-start
          justify-content-center tombol-grup">
          <div class="col-md-auto">
            <router-link to="/login" class="btn btn-prim mt-5 py-4">Log in</router-link>
          </div>
          <div class="col-md-auto my-register-btn pt-sm-0 pt-3">
            <router-link to="/register" class="btn btn-prim2 py-4">Sign in</router-link>
          </div>
        </div>
        <div class="row p-absolute b-5 d-xl-flex d-lg-flex d-md-flex d-none">
          <div class="col-auto text-register">
            <p>Don't have account yet?
              <span class="mx-2">
                <router-link to="/register">Register</router-link>
              </span> here
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-xl-4 col-lg-6 col-auto">
          <img class="gambar-tengah" src="@/assets/img/undraw_reading_list_4boi.png" alt="">
        </div>
        <div class="col-xl-4 col-lg-6 col-auto mt-lg-0 mt-5">
          <p class="h1 text-lg-left text-center">Don't be bored to read Books,
            because everything will be all right when you get knowledges based on your reading.</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <p class="text-center lh-1 cta pt-lg-5 pt-5 mt-5">No waiting, &nbsp; No queue, &nbsp;
           Just Tap and Read</p>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-4 offset-xl-5 col offset-0">
          <div class="row justify-content-center">
            <div class="col-12 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="36.484" height="52.57" viewBox="0 0 36.484 52.57">
                <g id="Group_12" data-name="Group 12" transform="translate(-678.257 -1699.5)">
                  <line id="Line_1" data-name="Line 1" y2="39" transform="translate(696.5 1702.5)"
                  fill="none" stroke="#000" stroke-linecap="round" stroke-width="6"/>
                  <line id="Line_2" data-name="Line 2" x1="13.896" y2="13.327"
                  transform="translate(696.604 1734.5)" fill="none"
                  stroke="#000" stroke-linecap="round" stroke-width="6"/>
                  <line id="Line_3" data-name="Line 3" x2="13.396" y2="13.327"
                  transform="translate(682.5 1734.5)" fill="none" stroke="#000"
                  stroke-linecap="round" stroke-width="6"/>
                </g>
              </svg>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 text-center">
              <router-link to="login" class="btn btn-prim px-auto mb-5 mt-4 py-4">
                Login
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="text-xl-left text-center pt-md-0 pt-5 mt-5 mb-5">
            &copy; 2020 Rahmarkademy BW 1 Batch#15
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Landing',
  updated() {
    if (localStorage.token) {
      this.$router.replace(this.$route.query.redirect || '/dashboard');
    }
  },
  created() {
    if (localStorage.token) {
      this.$router.replace(this.$route.query.redirect || '/dashboard');
    }
  },
};

</script>

<style lang="scss" scoped>
// @import '@/assets/scss/_font-face.scss';

* {
  font-family: 'Airbnb Cereal App', Arial, Helvetica, sans-serif;
}

img.logo {
  width: 100px;
}
p.text-logo {
  font-size: 60px;
  font-weight: bold;
}

.container {
  height: 100%;
}

.overflow-hidden {
  position: relative;
  width: 100%;
  height: 100vh;
  margin-bottom: 25vh;
  overflow: hidden;
}

.h1 {
  font-size: 35px;
  color: black;
  font-weight: bold;
}

.gambar-hero {
  position: absolute;
  right: -100px;
  top: 80px;
  img {
    width: 100vh;
  }
}

.tombol-grup {
  position: absolute;
  width: 100%;
  bottom: 10vh;
}

.btn.btn-prim {
  width: 100%;
  border: 3.5px solid black;
  font-size: 25px;
  font-family: 'Airbnb Cereal App', Arial, Helvetica, sans-serif;
  font-weight: bold;
  border-radius: 0px;
}

.btn.btn-prim2 {
  width: 100%;
  border: 3.5px solid black;
  color: white;
  background-color: black;
  font-size: 25px;
  font-family: 'Airbnb Cereal App', Arial, Helvetica, sans-serif;
  font-weight: bold;
  border-radius: 0px;
}

.my-register-btn a {
  display: block !important;
}

.text-register {
  display: none;
}

.text-register span a {
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.gambar-tengah {
  width: 100%;
}

.p-absolute {
  position: absolute;
}

.b-5 {
  bottom: 10vh;
}

.lh-1 {
  line-height: 55px !important;
}

p.cta {
  font-size: 45px;
  font-weight: bold;
  line-height: 70px;
}
@media (min-height: 600px) {
  .text-register {
    display: block;
  }
}
@media (min-width: 768px) and (min-height: 600px) {
  .my-register-btn a {
    display: none !important;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 700px !important;
  }
  img.logo {
    width: 100px;
  }
  p.text-logo {
    font-size: 60px;
    font-weight: bold;
  }
  .btn.btn-prim, .btn.btn-prim2 {
    width: 200px;
  }
  .tombol-grup {
    position: static;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 860px !important;
  }

  img.logo {
    width: 200px;
  }
  p.text-logo {
    font-size: 100px;
    font-weight: bold;
  }

}

@media (min-width: 1200px) {
  .container {
    max-width: 1400px !important;
  }
}

@media (min-width: 1700px) {
  .container {
    max-width: 1600px !important;
  }
}
</style>
