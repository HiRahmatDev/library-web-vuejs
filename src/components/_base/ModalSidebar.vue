<template>
  <div class="bg-modal">
    <div class="modal-content">
      <div class="modal-header">
        <button class="close" @click="$emit('close-modal')">
          <img src="@/assets/img/close.png" alt="">
        </button>
        <h2>Add Book</h2>
      </div>
      <div class="modal-container">
        <form @submit="sendData">
          <div class="baris">
            <div class="kolom-3">
              <label for="title">Title</label>
            </div>
            <div class="kolom-9">
              <input v-model="title" type="text" id="title">
            </div>
          </div>
          <div class="baris">
            <div class="kolom-3">
              <label for="description">Description</label>
            </div>
            <div class="kolom-9">
              <textarea v-model="description"
              id="description" rows="4"></textarea>
            </div>
          </div>
          <div class="baris">
            <div class="kolom-3">
              <label for="author">Author</label>
            </div>
            <div class="kolom-9">
              <input v-model="author" type="text" id="author">
            </div>
          </div>
          <div class="baris">
            <div class="kolom-3">
              <label for="image">Image</label>
            </div>
            <div class="kolom-9">
              <input id="file" type="file" ref="file"  v-on:change="handleUpload">
            </div>
          </div>
          <div class="baris">
            <div class="kolom-3">
              <label for="category">Category</label>
            </div>
            <div class="kolom-9">
              <input v-model="category" type="text" id="category">
            </div>
          </div>
          <div class="baris">
            <button class="btn-modal">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ModalSidebar',
  data() {
    return {
      title: '',
      author: '',
      description: '',
      category: '',
      error: '',
      code: 0,
    };
  },
  methods: {
    handleUpload() {
      // this.img = this.$refs.file.files;
    },
    sendData(e) {
      const that = this;
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('description', this.description);
      formData.append('author', this.author);
      formData.append('img', this.$refs.file.files[0]);
      formData.append('id_category', this.category);
      axios.post('http://localhost:3333/api/v1/book/insert', formData)
        .then((res) => {
          if (res.status === 200) {
            that.$router.push(`book/${res.data.result.insertId}`);
          }
        })
        .catch((err) => {
          that.error = err;
          that.code = 1;
        });
    },
  },
};
</script>
