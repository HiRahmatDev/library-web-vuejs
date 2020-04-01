<template>
  <div class="carousel">
    <button class="prev-btn">
      <img src="@/assets/img/left-arrow2.png" alt="">
    </button>
    <div class="carousel-wrap track">
      <router-link to="/book/1" class="carousel-item">
        <div class="carousel-card">
          <img src="@/assets/img/dilan.jpg" alt="">
          <div class="description">
            <h3 class="judul-buku">Dilan 1990</h3>
            <p class="nama-penulis">Pidi Baiq</p>
          </div>
        </div>
      </router-link>
      <a href="#" class="carousel-item current__slide">
        <div class="carousel-card">
          <img src="@/assets/img/ubur-ubur.jpg" alt="">
          <div class="description">
            <h3 class="judul-buku">Ubur-ubur Lembur</h3>
            <p class="nama-penulis">Raditya Dika</p>
          </div>
        </div>
      </a>
      <a href="#" class="carousel-item">
        <div class="carousel-card">
          <img src="@/assets/img/laskar.jpg" alt="">
          <div class="description">
            <h3 class="judul-buku">Laskar Pelangi</h3>
            <p class="nama-penulis">Andrea Hirata</p>
          </div>
        </div>
      </a>
      <a href="rincian-buku.html" class="carousel-item">
        <div class="carousel-card">
          <img src="@/assets/img/dilan.jpg" alt="">
          <div class="description">
            <h3 class="judul-buku">Dilan 1990</h3>
            <p class="nama-penulis">Pidi Baiq</p>
          </div>
        </div>
      </a>
    </div>
    <button class="next-btn">
      <img src="@/assets/img/left-arrow2.png" alt="">
    </button>
  </div>
</template>

<script>

export default {
  name: 'Carousel',
};
</script>

<style lang="sass" scoped>

</style>
