<template>
  <router-link :to="'/book/' + book.id">
    <div class="card">
      <div class="container-thumb">
        <img :src="book.img" alt="">
      </div>
      <h3>{{ book.title }}</h3>
      <p>{{ book.description }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Card',
  props: ['book'],
};
</script>
