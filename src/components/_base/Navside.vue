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
          <div class="kategori">All Categories</div>
          <ul class="dropdown">
            <li>All Categories</li>
            <li v-bind:key="category.id"
                v-for="category in dbCategory.result">{{ category.name_category }}</li>
          </ul>
        </li>
        <li>
          <div class="waktu">All Times</div>
          <ul class="dropdown">
            <li>All Time</li>
            <li>Newest</li>
            <li>Last hour</li>
            <li>Last week</li>
            <li>Last year</li>
          </ul>
        </li>
        <li><router-link to="book"><p>Explore</p></router-link></li>
        <li><router-link to="book/history"><p>History</p></router-link></li>
        <li><a @click="$emit('clickModal')" class="panggil-modal"><p>Add Book*</p></a></li>
        <li><router-link to="/"><p>Log Out</p></router-link></li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Navside',
  props: ['myClass', 'dbCategory'],
};
</script>
