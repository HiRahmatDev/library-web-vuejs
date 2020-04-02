<template>
  <div class="nav">
    <div class="navbar">
      <div class="burger" @click="$emit('sendSwipe')" >
        <a :class="myClass.hiddenToLeft">
          <img src="@/assets/img/svg/burger.svg" alt="">
        </a>
      </div>
      <ul>
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
          <div class="waktu" href="#">All Time</div>
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
  props: ['myClass'],
};
</script>
