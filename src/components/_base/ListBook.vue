<template>
  <section class="list-book">
    <h2 v-if="judul === 'All Categories' || judul === 'List Book'">{{ judul }}</h2>
    <h2 v-else>Search "{{ judul }}"</h2>
    <div class="book baris">
      <div v-bind:key="book.id" v-for="book in book.result" class="kolom">
        <Card v-bind:book="book" />
      </div>
    </div>
    <div class="pagination">
      <button v-if="book.prevLink === null"
              class="disabled"
              @click="$emit('prev-page')" >
      <span>&laquo;</span> Prev
      </button>
      <button v-else
              @click="$emit('prev-page')" >
      <span>&laquo;</span> Prev
      </button>
      <ul class="page">
        <div v-for="page in book.pages" :key="page" >
          <li v-if="page !== book.page" class="disabled">{{ page }}</li>
          <li v-else>{{ page }}</li>
        </div>
      </ul>
      <button v-if="book.nextLink === null"
              class="disabled"
              @click="$emit('next-page')"
      >
      Next <span>&raquo;</span>
      </button>
      <button v-else
              @click="$emit('next-page')" >
      Next <span>&raquo;</span>
      </button>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-plusplus */
import Card from '@/components/_module/Card.vue';

export default {
  name: 'ListBook',
  components: {
    Card,
  },
  props: ['book', 'judul'],
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
      box-shadow: 0 10px 30px -20px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      overflow: hidden;
      transition: box-shadow ease .4s, transform ease .2s;
      &:hover {
        box-shadow: 0 30px 35px -25px rgba(0, 0, 0, 0.25);
        transform: translateY(-4px);
      }
      &:active {
        box-shadow: 0 10px 30px -20px rgba(0, 0, 0, 0.25);
        transform: translateY(2px);
      }
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
            transition: transform ease .4s;
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
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  button {
    font-family: 'Airbnb Cereal App', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    border: solid 1px rgba(0, 0, 0, 0.11);
    background-color: white;
    padding: 10px 19px;
    border-radius: 50px;
    transition: ease .1s;
    &:focus {
      outline: none;
    }
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.11);
    }
    &:active {
      transform: translateY(2px);
      box-shadow: 0 0px 4px rgba(0, 0, 0, 0.11);
    }
    span {
      font-size: 20px;
      line-height: 0;
      transition: ease .2s;
    }
    &:first-child {
      &:hover span {
        margin-right: 6px;
      }
    }
    &:last-child {
      &:hover span {
        margin-left: 6px;
      }
    }
  }
  button.disabled {
    border: solid 1px rgba(0, 0, 0, 0.11);
    color: rgba(3, 3, 3, 0.11);
    &:focus {
      outline: none;
    }
    &:hover {
      transform: translateY(0px);
      box-shadow: none;
    }
    &:active {
      transform: translateY(0px);
      box-shadow: none;
    }
    &:first-child {
      &:hover span {
        margin-right: 0px;
      }
    }
    &:last-child {
      &:hover span {
        margin-left: 0px;
      }
    }
  }
  ul.page {
    font-family: 'Airbnb Cereal App', Arial, Helvetica, sans-serif;
    display: flex;
    div {
      margin: 0 12.5px;
      cursor: pointer;
      &:first-child {
        margin-left: 20px;
      }
      &:last-child {
        margin-right: 20px;
      }
      .disabled {
        color: rgba(0, 0, 0, 0.226);
      }
    }
  }
}

</style>
