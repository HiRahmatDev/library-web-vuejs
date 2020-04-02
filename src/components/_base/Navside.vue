<template>
  <aside id="menu-profil" :class="myClass.geser">
    <div class="nav">
      <div class="burger" @click="$emit('sendSwipe')" >
        <a>
          <img src="@/assets/img/svg/burger.svg" alt="">
        </a>
      </div>
    </div>
    <div class="container center">
      <div class="foto-profil">
        <img src="@/assets/img/Niki Zefanya.png" alt="">
        <h2>Niki Zefanya</h2>
      </div>
    </div>
    <div class="container">
      <form class="search">
        <div class="grup-search">
          <button><img src="@/assets/img/magnifying-glass.png" alt=""></button>
          <input type="text" placeholder="Search book">
        </div>
      </form>
      <ul class="nav-aside">
        <li>
          <div class="kategori" href="#">All Categories</div>
          <ul class="dropdown">
            <li>All Categories</li>
            <li>Novel</li>
            <li>Sci-Fi</li>
            <li>Romance</li>
            <li>Journal</li>
          </ul>
        </li>
        <li>
          <div class="waktu" href="#">All Times</div>
          <ul class="dropdown">
            <li>All Time</li>
            <li>Newest</li>
            <li>Last hour</li>
            <li>Last week</li>
            <li>Last year</li>
          </ul>
        </li>
        <li><a href="#"><p>Explore</p></a></li>
        <li><a href="#"><p>History</p></a></li>
        <li><a class="panggil-modal"><p>Add Book*</p></a></li>
        <li><router-link to="/"><p>Log Out</p></router-link></li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Navside',
  props: ['myClass'],
};
</script>
