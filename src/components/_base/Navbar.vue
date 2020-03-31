<template>
  <div class="nav">
    <div class="navbar">
      <div class="burger">
        <a>
          <img src="@/assets/img/svg/burger.svg" alt="">
        </a>
      </div>
      <ul>
        <li>
          <a class="kategori" href="#">All Categories</a>
          <ul class="dropdown">
            <li>All Categories</li>
            <li>Novel</li>
            <li>Sci-Fi</li>
            <li>Romance</li>
            <li>Journal</li>
          </ul>
        </li>
        <li>
          <a class="waktu" href="#">All Time</a>
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
};
</script>
