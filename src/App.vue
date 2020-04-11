<template>
  <div id="library">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Library',
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || 'Library';
      },
      immediate: true,
    },
  },
};

</script>

<style lang="scss">
@import '@/assets/scss/_font-face.scss';
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';

.swal2-container {
  zoom: 1.5;
}

body, input {
  font-family: 'Airbnb Cereal App', Arial, Helvetica, sans-serif;
  color: $primaryColor;
}

.container-fluid {
  width: 100%;
  position: relative;
}

.container {
  position: relative;
  width: 80%;
  @include layar(tablet) {
    width: 90%;
  }
  margin: 0 auto;
}
.baris {
  display: flex;
  width: auto;
}
.btn, a.btn {
  display: inline-block;
  font-family: 'Airbnb Cereal App';
  font-size: $psize;
  text-align: center;
  line-height: 0;
  color: $primaryColor;
  background-color: transparent;
  padding: 18px 0;
  min-width: 110px;
  @include layar(tablet) {
    width: 100%;
    margin-bottom: 12px;
    padding: 24px 0;
  }
  border: 2px solid #D0CCCC;
  border-radius: 5px;
  cursor: pointer;
}

.btn.btn-auth-primary {
  background-color: black;
  color: $secondaryColor;
  border: 2px solid black;
}

.bg-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  visibility: hidden;
  opacity: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(141, 141, 141, 0.541);
  transition: visibilty ease 1s, opacity ease .4s, transform ease .2s;
  z-index: 10;
  .modal-content {
    transform: scale(.6);
    position: relative;
    width: 80%;
    height: 120%;
    box-sizing: border-box;
    @include layar(tablet) {
      width: 95%;
      // height: 97%;
      transform: scale(.8);
    }
    @include layar(hp) {
      width: 95%;
      height: 97%;
      transform: scale(.8);
    }
    background-color: white;
    border-radius: 15px;
    transition: transform ease .2s;
    .modal-header {
      height: 120px;
      background-color: white;
      margin: 34px 0 0 42px;
      @include layar(hp) {
        margin: 20px 0 0 20px;
      }
      .close {
        border: none;
        background-color: transparent;
        position: absolute;
        top: 18px;
        right: 18px;
        cursor: pointer;
        padding: 2px 4px;
        img {
          width: 24px;
        }
      }
      h2 {
        font-size: 40px;
        font-weight: 500;
        color: black;
        @include layar(hp) {
          font-size: 30px;
        }
      }
    }
    .modal-container {
      margin: 34px 0 34px 42px;
      height: 80%;
      box-sizing: border-box;
      @include layar(hp) {
        margin: 20px 0 20px 20px;
      }
      form {
        margin-top: -50px;
        padding-right: 42px;
        height: 100%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          width: 7px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #dbdbdb;
          border-radius: 10px;
        }
        &::-webkit-scrollbar-track {
          background-color: transparent;
          border-radius: 10px;
        }
        .baris {
          margin: 30px 0;
          @include layar(hp) {
            margin: 20px 0;
          }
          .kolom-3 {
            width: 25%;
            display: flex;
            padding-top: 24px;
            @include layar(hp) {
              width: 40%;
              padding-top: 12px;
            }
          }
          .kolom-9 {
            width: 75%;
            @include layar(hp) {
              width: 60%;
            }
          }
        }

        label {
          font-size: 30px;
          font-weight: 500;
          color: black;
          @include layar(tablet) {
            font-size: 1.2em;
          }
          @include layar(hp) {
            font-size: 1em;
          }
        }

        input, textarea {
          resize: none;
          box-sizing: border-box;
          font-family: 'Airbnb Cereal App';
          font-size: 30px;
          font-weight: 500;
          color: #C8BABA;
          padding: 18px 22px;
          width: 100%;
          border-radius: 10px;;
          border: 2px solid rgba(0, 0, 0, 0.2);
          outline: none;
          @include layar(hp) {
            font-size: 1em;
            padding: 12px 15px;
          }
        }

        .btn-modal {
          transition: background-color ease .2s;
          &:active {
            outline: none;
          }
          &:focus {
            outline: none;
          }
          &:hover {
            background-color: $pentingLighter;
          }
          cursor: pointer;
          margin-left: auto;
          color: white;
          background-color: $penting;
          font-size: 30px;
          width: 204px;
          text-align: center;
          padding: 18px 0;
          border: none;
          border-radius: 10px;
          @include layar(tablet) {
            padding: 12px 0;
            font-size: 25px;
            width: 170px;
          }
          @include layar(hp) {
            padding: 12px 0;
            font-size: 25px;
            width: 100%;
          }
        }
      }

    }
  }
}

.modal-active {
  visibility: visible;
  opacity: 1;
  transform: scale(1.2);
}

@import '@/assets/scss/_auth.scss';
@import '@/assets/scss/_dashboard.scss';
@import '@/assets/scss/_detail.scss';
</style>
