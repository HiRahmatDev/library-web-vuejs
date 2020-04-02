<template>
  <section class="list-book">
    <h2>List Book</h2>
    <div class="book baris">
      <div v-bind:key="book.id" v-for="book in dbBook" class="kolom">
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
  props: ['dbBook'],
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
      @include layar(hp) {
        width: 100%;
      }
      .card {
        width: 100%;
        height: 90%;
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
            &:hover {
              transform: scale(1.07);
            }
          }
        }
        h3 {
          width: 70%;
          height: 24px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 12px auto 0;
          font-size: 22px;
          font-weight: bold;
          color: #424242;
          text-align: center;
        }
        p {
          margin: 0 5%;
          font-size: 15px;
          line-height: 20px;
          color: #424242;
          font-weight: 300;
          text-align: center;
          margin-top: 18px;
        }
      }
    }
  }
}

</style>
