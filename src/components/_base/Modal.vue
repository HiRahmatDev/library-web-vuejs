<template>
  <div class="bg-modal" @keyup.esc="$emit('close-modal')" >
    <div class="modal-content">
      <div class="modal-header">
        <button class="close" @click="$emit('close-modal')">
          <img src="@/assets/img/close.png" alt="">
        </button>
        <h2>{{ modal.title }}</h2>
      </div>
      <div class="modal-container">
        <form @submit.prevent="sendData">
          <div class="baris">
            <div class="kolom-3">
              <label for="title">Title</label>
            </div>
            <div class="kolom-9">
              <input v-model="modal.input.title" type="text" id="title">
            </div>
          </div>
          <div class="baris">
            <div class="kolom-3">
              <label for="description">Description</label>
            </div>
            <div class="kolom-9">
              <textarea v-model="modal.input.description"
              id="description" rows="4"></textarea>
            </div>
          </div>
          <div class="baris">
            <div class="kolom-3">
              <label for="author">Author</label>
            </div>
            <div class="kolom-9">
              <input v-model="modal.input.author" type="text" id="author">
            </div>
          </div>
          <div class="baris">
            <div class="kolom-3">
              <label for="image">Image</label>
            </div>
            <div class="kolom-9">
              <input id="file" type="file" ref="file">
            </div>
          </div>
          <div class="baris">
            <div class="kolom-3">
              <label for="category">Category</label>
            </div>
            <div class="kolom-9">
              <input v-model="modal.input.category" type="text" id="category">
            </div>
          </div>
          <div class="baris">
            <button class="btn-modal">{{ modal.button }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  props: ['modal'],
  data() {
    return {
      title: '',
      author: '',
      description: '',
      file: '',
      category: '',
      error: '',
      code: 0,
    };
  },
  methods: {
    sendData() {
      this.$emit('submit-data', this.$refs.file.files[0]);
      // e.preventDefault();
      // const formData = new FormData();
      // formData.append('title', this.title);
      // formData.append('description', this.description);
      // formData.append('author', this.author);
      // formData.append('img', this.$refs.file.files[0]);
      // formData.append('id_category', this.category);
      // this.$emit('data-modal', formData);
    },
  },
};
</script>
