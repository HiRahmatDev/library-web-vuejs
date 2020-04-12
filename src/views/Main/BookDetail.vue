<template>
  <div>
    <header class="container-fluid">
      <router-link to="/dashboard" class="btn-back">
        <img src="@/assets/img/svg/arrow.svg" alt="">
      </router-link>
      <div v-if="checkRole() === 1 || checkRole() === 2" class="grup-edit">
        <div class="edit panggil-modal" @click="showModal">Edit</div>
        <div class="delete modal-del" @click="showAlert">Delete</div>
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
            <button @click="borrow()" class="btn-pinjam">Borrow</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Edit -->
    <!-- <div class="bg-modal modal-active">
      <div class="modal-content">
        <button class="close"><img src="@/assets/img/close.png" alt=""></button>
        <div class="modal-container">
          <h2>Edit Book</h2>
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
    <!-- End Modal -->
    <Modal @submit-data="editBook"
           @close-modal="closeModal"
           :modal="modal" />
  </div>
</template>

<script>
import jwt from 'jsonwebtoken';
import Axios from 'axios';
import Modal from '@/components/_base/Modal.vue';

export default {
  name: 'BookDetail',
  // props: ['id'],
  components: {
    Modal,
  },
  data() {
    return {
      bookDetail: {},
      modal: {
        title: 'Edit Book',
        button: 'Save',
        input: {
          title: '',
          author: '',
          description: '',
          category: '',
          error: '',
          code: 0,
        },
      },
    };
  },
  methods: {
    checkRole() {
      const token = jwt.verify(localStorage.token, process.env.VUE_APP_SECRET_KEY);
      return token.role_id;
    },
    getIdUser() {
      const token = jwt.verify(localStorage.token, process.env.VUE_APP_SECRET_KEY);
      return token.id;
    },
    loadBookDetail() {
      Axios.get(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book/${this.$route.params.id}`)
        .then((res) => {
          this.bookDetail = res.data.result;
          this.modal.input.title = res.data.result.title;
          this.modal.input.author = res.data.result.author;
          this.modal.input.description = res.data.result.description;
          this.modal.input.category = res.data.result.id_category;
        });
    },
    borrow() {
      if (this.bookDetail.status === 0) {
        this.$swal({
          title: 'Borrow Failed!',
          text: 'Book is not available',
          icon: 'warning',
          confirmButtonColor: '#FBCC38',
        });
        return;
      }
      this.$swal({
        title: 'Confirm Borrow',
        text: 'Are you sure want to borrow this book?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FBCC38',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.$swal({
            title: 'Book Borrowed',
            text: `${this.bookDetail.title} has been borrowed!`,
            icon: 'success',
            confirmButtonColor: '#FBCC38',
          });
          Axios.post(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book/loan?user=${this.getIdUser()}&book=${this.bookDetail.id}`)
            .then((res) => {
              console.log(res);
              this.$router.push('/book/loan');
            });
        }
      });
    },
    showModal() {
      document.querySelector('.bg-modal').classList.add('modal-active');
    },
    closeModal() {
      document.querySelector('.bg-modal').classList.remove('modal-active');
    },
    editBook(file) {
      const formData = new FormData();
      formData.append('title', this.modal.input.title);
      formData.append('description', this.modal.input.description);
      formData.append('author', this.modal.input.author);
      formData.append('img', file);
      formData.append('id_category', this.modal.input.category);
      const that = this;
      Axios.patch(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book/${this.$route.params.id}`, formData)
        .then((res) => {
          if (res.status === 200) {
            that.$router.go();
          }
        })
        .catch((err) => {
          that.modal.input.error = err;
          that.modal.input.code = 1;
        });
    },
    showAlert() {
      this.$swal({
        title: 'Yakin mau dihapus?',
        text: 'Data yang akan dihapus tidak bisa kembali!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Iya, hapus!',
      }).then((result) => {
        if (result.value) {
          this.$swal({
            title: 'Terhapus!',
            text: `${this.modal.input.title} berhasil dihapus!`,
            icon: 'success',
            confirmButtonColor: '#FBCC38',
          });
          Axios.delete(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book/${this.$route.params.id}`)
            .then(() => {
              this.$router.push('/login');
            });
        }
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
