<template>
  <div class="bg-modal" :class="myClass.modalActive" >
    <div class="modal-content">
      <button @click="$emit('closeModal')" class="close">
        <img src="@/assets/img/close.png" alt="">
      </button>
      <div class="modal-container">
        <h2>Add Data</h2>
        <form>
          <div class="baris">
            <div class="kolom-3">
              <label for="urlImage">Url Image</label>
            </div>
            <div class="kolom-9">
              <input v-model="img" type="text" id="urlImage">
            </div>
          </div>
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
              <label for="author">Author</label>
            </div>
            <div class="kolom-9">
              <input v-model="author" type="text" id="author">
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
              <label for="category">Category</label>
            </div>
            <div class="kolom-9">
              <input v-model="category" type="text" id="category">
            </div>
          </div>
          <div class="baris">
            <button @click="sendData" class="btn-modal">Save</button>
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
  props: ['myClass'],
  data() {
    return {
      img: '',
      title: '',
      author: '',
      description: '',
      category: '',
    };
  },
  methods: {
    sendData(e) {
      e.preventDefault();
      const self = this;
      const input = {};
      input.title = this.title;
      input.description = this.description;
      input.author = this.author;
      input.img = this.img;
      input.id_category = this.category;
      axios.post('http://localhost:3333/api/v1/book/insert', input)
        .then((res) => {
          // console.log(res.data);
          if (res.status === 200) {
            self.$router.push('book/5');
          }
        })
        .catch((err) => {
          self.output = err;
        });
    },
  },
};
</script>
