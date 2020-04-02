<template>
  <section class="list-book">
    <h2>List Book</h2>
    <div class="book baris">
      <div v-bind:key="book.id" v-for="book in books" class="kolom">
        <router-link :to="'/book/' + book.id">
          <div class="card">
            <div class="container-thumb">
              <img :src="book.img" alt="">
            </div>
            <h3>{{ book.title }}</h3>
            <p>{{ book.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ListBook',
  props: ['books'],
};
</script>
