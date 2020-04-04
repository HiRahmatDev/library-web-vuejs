<template>
  <div class="nav" >
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
            <li v-bind:key="category.id"
                v-for="category in dbCategory.result">{{ category.name_category }} </li>
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
    <a href="#" class="logo">
      <img src="@/assets/img/logo.png" alt="Logo Library">
      <h1>Library</h1>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['myClass', 'dbCategory'],
};
</script>
