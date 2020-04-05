<template>
  <nav class="nav to-fixed" :class="myClass.navAktif" >
    <div class="navbar">
      <div class="burger" @click="$emit('sendSwipe')" >
        <a :class="myClass.hiddenToLeft">
          <img src="@/assets/img/svg/burger.svg" alt="">
        </a>
      </div>
      <ul>
        <li>
          <div class="kategori">All Categories</div>
          <ul class="dropdown">
            <li>All Categories</li>
            <li :key="category.id"
                v-for="category in api.category.result">{{ category.name_category }} </li>
          </ul>
        </li>
        <li>
          <div class="waktu">All Time</div>
          <ul class="dropdown">
            <li>All Time</li>
            <li>Last hour</li>
            <li>Last week</li>
            <li>Last year</li>
          </ul>
        </li>
      </ul>
    </div>
    <form class="search">
      <div class="grup-search">
        <button><img src="@/assets/img/magnifying-glass.png" alt=""></button>
        <input type="search" placeholder="Search book">
      </div>
    </form>
    <router-link to="/" class="logo">
      <img src="@/assets/img/logo.png" alt="Logo Library">
      <h1>Library</h1>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['myClass', 'api'],
};
</script>
