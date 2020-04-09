<template>
  <div>
    <header class="container-fluid">
      <router-link to="/dashboard" class="btn-back">
        <img src="@/assets/img/svg/arrow.svg" alt="">
      </router-link>
      <div class="grup-edit">
        <div class="edit panggil-modal">Edit</div>
        <div class="delete modal-del">Delete</div>
      </div>
      <img :src="bookDetail.img" alt="Sampul buku Dilan 1990">
    </header>
    <div class="container">
      <div class="baris">
        <div class="kolom artikel">
          <div class="baris">
            <div class="kolom">
              <div class="lencana">
                <p>{{ bookDetail.name_category }}</p>
              </div>
              <div class="judul-buku">
                <h2>{{ bookDetail.title }}</h2>
              </div>
              <div class="waktu">
                <p>{{ bookDetail.created_at }}</p>
              </div>
            </div>
            <div class="kolom">
              <div v-if="bookDetail.status === 1" >
                <p class="status">Available</p>
              </div>
              <div v-else >
                <p class="status not-avail">Not Available</p>
              </div>
            </div>
          </div>
          <div class="baris">
            <p class="deskripsi">{{ bookDetail.description }}</p>
          </div>
        </div>
        <div class="kolom aksi">
          <div class="baris">
            <img :src="bookDetail.img" alt="" class="sampul-buku">
          </div>
          <div class="baris">
            <a href="#" class="btn-pinjam">Borrow</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Edit
    <div class="bg-modal">
      <div class="modal-content">
        <button class="close"><img src="@/assets/img/close.png" alt=""></button>
        <div class="modal-container">
          <h2>Edit Data</h2>
          <form>
            <div class="baris">
              <div class="kolom-3">
                <label for="urlImage">Url Image</label>
              </div>
              <div class="kolom-9">
                <input type="text" id="urlImage">
              </div>
            </div>
            <div class="baris">
              <div class="kolom-3">
                <label for="title">Title</label>
              </div>
              <div class="kolom-9">
                <input type="text" id="title">
              </div>
            </div>
            <div class="baris">
              <div class="kolom-3">
                <label for="description">Description</label>
              </div>
              <div class="kolom-9">
                <textarea name="description" id="description" rows="4"></textarea>
              </div>
            </div>
            <div class="baris">
              <button class="btn-modal">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BookDetail',
  props: ['id'],
  data() {
    return {
      bookDetail: {},
    };
  },
  methods: {
    loadBookDetail() {
      axios.get(`http://localhost:3333/api/v1/book/${this.id}`)
        .then((res) => {
          this.bookDetail = res.data.result;
        });
    },
  },
  beforeCreate() {
    if (!localStorage.token && this.$route.path !== '/login') {
      this.$router.push('/login');
    }
  },
  created() {
    this.loadBookDetail();
  },
};
</script>
