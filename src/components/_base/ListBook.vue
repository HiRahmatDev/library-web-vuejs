<template>
  <section class="list-book">
    <h2>{{ judul }}</h2>
    <div class="book baris">
      <div v-bind:key="book.id" v-for="book in dbBook" class="kolom">
        <Card v-bind:book="book" />
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/_module/Card.vue';

export default {
  name: 'ListBook',
  components: {
    Card,
  },
  props: ['dbBook', 'judul'],
};
</script>

<style lang="scss" >
@import '@/assets/scss/_vars.scss';

section.list-book {
  padding: 0 3%;
  margin: 40px 0 20px;
  @include layar(hp) {
    margin: 80px 0 20px;
  }
  h2 {
    font-size: 25px;
    font-weight: bold;
    color: #424242;
    margin: 0 0 20px;
    @include layar(hp) {
      margin: 0;
    }
  }
}

.book {
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  .kolom {
    display: flex;
    width: auto;
    justify-content: center;
    padding: 35px 17px;
    @include layar(hp) {
      width: 97%;
      padding: 35px 0;
    }
    a {
      width: 320px;
      height: 340px;
      box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      overflow: hidden;
      &:hover .card .container-thumb img{
        transform: scale(1.07);
      }
      @include layar(hp) {
        width: 100%;
      }
      .card {
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        .container-thumb {
          width: 100%;
          height: 200px;
          overflow: hidden;
          img {
            width: 100%;
            object-fit: cover;
            transform: scale(1.005);
            transition: transform ease .5s;
          }
        }
        h3 {
          width: 70%;
          height: 24px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 14px auto 0;
          font-size: 22px;
          font-weight: bold;
          color: #424242;
          text-align: center;
        }
        p {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          width: 89%;
          height: 60px;
          overflow: hidden;
          margin: 20px auto 0;
          font-size: 15px;
          line-height: 20px;
          color: #424242;
          font-weight: 300;
          text-align: center;
        }
      }
    }
  }
}

</style>
