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
      <img src="@/assets/img/dilan.jpg" alt="Sampul buku Dilan 1990">
    </header>
    <div class="container">
      <div class="baris">
        <div class="kolom artikel">
          <div class="baris">
            <div class="kolom">
              <div class="lencana">Novel</div>
              <div class="judul-buku">
                <h2>Dilan 1990</h2>
              </div>
              <div class="waktu">
                <p>30 Juni 2019</p>
              </div>
            </div>
            <div class="kolom">
              <p class="status">Available</p>
            </div>
          </div>
          <div class="baris">
            <p class="deskripsi">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quos amet repellat ducimus? Odit debitis, eos id incidunt perferendis veniam
              enim voluptate quia asperiores, accusantium nesciunt provident facilis soluta
              culpa autem sunt quis nisi, cumque quisquam laboriosam placeat? Maiores nemo
              inventore assumenda voluptates laboriosam, cum perferendis, magni ipsum voluptate
              ipsam possimus soluta qui repellat quos et! Quas iste pariatur consectetur, numquam
              fugit quam voluptatem beatae impedit. Quisquam suscipit iste officiis corporis quia
              facilis consequuntur modi, quos consequatur? Animi facilis eos autem reprehenderit
              consequuntur atque, earum nulla vitae enim fuga suscipit numquam praesentium, maxime
              laborum fugiat harum soluta minima dicta quidem impedit.</p>
          </div>
        </div>
        <div class="kolom aksi">
          <div class="baris">
            <img src="@/assets/img/dilan-cover-book.png" alt="" class="sampul-buku">
          </div>
          <div class="baris">
            <a href="#" class="btn-pinjam">Borrow</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Edit -->
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
    </div>
  </div>
</template>
