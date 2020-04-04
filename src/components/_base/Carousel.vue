<template>
  <div class="carousel">
    <button class="prev-btn">
      <img src="@/assets/img/left-arrow2.png" alt="">
    </button>
    <div class="carousel-wrap track">
      <router-link :to="'/book/' + book.id" v-for="book in dbBook"
        v-bind:key="book.id" class="carousel-item">
        <div class="carousel-card">
          <img :src="book.img" alt="">
          <div class="description">
            <h3 class="judul-buku">{{ book.title }}</h3>
            <p class="nama-penulis">{{ book.author }}</p>
          </div>
        </div>
      </router-link>
    </div>
    <button class="next-btn">
      <img src="@/assets/img/left-arrow2.png" alt="">
    </button>
  </div>
</template>

<script>

export default {
  name: 'Carousel',
  props: ['dbBook'],
};
</script>

<style lang="sass" scoped>

</style>
