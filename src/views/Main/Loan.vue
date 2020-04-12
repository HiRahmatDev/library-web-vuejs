<template>
  <div class="container-fluid" id="loan">
    <Navbar :namePage="namePage"
            @burgerClicked="showSideNav"
            @enter="hideSideNav"/>
    <Navside @burgerClicked="hideSideNav"
             @enter="hideSideNav" />
    <div class="container-1">
      <router-link class="btn btn-table" to="/book/loan">Loan</router-link>
      <router-link class="btn btn-table" to="/book/history">History</router-link>
      <table id="table-history">
        <col width="20">
        <col>
        <col width="5%">
        <col width="5%">
        <col width="20%">
        <tr>
          <th>#</th>
          <th>Books</th>
          <th class="text-center">Forfeit</th>
          <th class="text-center">Action</th>
          <th>Deadline</th>
        </tr>
        <tr v-for="(data, i) in loanList" :key="data.id">
          <td>{{ i + 1 }}</td>
          <td><div class="book-name"><img :src="data.img"><p>{{ data.title }}</p></div></td>
          <td class="text-center">{{ data.forfeit }}</td>
          <td class="text-center">
            <span @click="returnBook(data.id)">Return</span>
          </td>
          <td>{{ data.deadline }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import jwt from 'jsonwebtoken';
import Navbar from '@/components/_base/Navbar.vue';
import Navside from '@/components/_base/Navside.vue';

export default {
  components: {
    Navbar,
    Navside,
  },
  data() {
    return {
      loanList: [],
      namePage: '',
    };
  },
  computed: {
  },
  methods: {
    loadHistory() {
      const token = jwt.verify(localStorage.token, process.env.VUE_APP_SECRET_KEY);
      Axios.get(`http://${process.env.VUE_APP_ROOT_URL}/api/v1/book/loan`)
        .then((res) => {
          const data = res.data.result;
          const dataBaseOnUser = data.filter((d) => d.id_user === token.id && d.status_loan === 1);
          this.loanList = dataBaseOnUser;
        });
    },
    returnBook(id) {
      this.$swal({
        title: 'Return Now?',
        text: 'Are you sure want to return this book?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FBCC38',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.$router.push(`/book/return/${id}`);
        }
      });
    },
    getNamePage() {
      const idName = document.querySelector('.container-fluid').id;
      this.namePage = idName;
    },
    showSideNav() {
      document.querySelector('#profile-menu').classList.replace('hide-sidenav', 'show-sidenav');
      document.querySelector('#history').classList.add('menu-active');
      document.querySelector('.burger a').classList.add('hidden-to-left');
      document.querySelector('.nav.to-fixed').classList.add('nav-active');
    },
    hideSideNav() {
      document.querySelector('#profile-menu').classList.replace('show-sidenav', 'hide-sidenav');
      document.querySelector('#history').classList.remove('menu-active');
      document.querySelector('.burger a').classList.remove('hidden-to-left');
      document.querySelector('.nav.to-fixed').classList.remove('nav-active');
    },
  },
  created() {
    this.loadHistory();
  },
  mounted() {
    this.getNamePage();
  },
};
</script>

<style lang="scss" scoped>
.container-1 {
  margin-top: 120px;
}
a.btn-back {
  display: flex;
  width: 60px;
  height: 60px;
  margin: 85px 0 0 10px;
  border-radius: 50px;
  justify-content: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.062);
  }
}
table {
  width: 100%;
  margin-top: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.151);
  border-radius: 10px;
  overflow: hidden;
  span {
    background-color: rgb(255, 196, 86);
    color: white;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
  }
}
table, tr, th, td {
  align-content: center;
  padding: 5px 5px 5px 25px;
  vertical-align: middle;
}
th {
  font-size: 20px;
  padding: 27px 5px 27px 25px;
  text-align: start;
  font-weight: bolder;
}
td {
  font-weight: 500;
}
tr {
  &:last-child td {
    padding-bottom: 10px;
  }
  &:hover {
    background-color:rgba(0, 0, 0, 0.027);
  }
}
.text-center {
  text-align: center;
}
.book-name {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  img {
    width: 60px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }
  p {
    margin-left: 20px;
  }
}
</style>
