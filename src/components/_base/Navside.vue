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
        <img :src="api.user.result[0].photo" alt="">
        <h2>{{ api.user.result[0].fullname }}</h2>
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
            <li :key="category.id"
                v-for="category in api.category.result">{{ category.name_category }}</li>
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
        <li><router-link to="/logout"><p>Log Out</p></router-link></li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Navside',
  props: ['myClass', 'api'],
};
</script>
