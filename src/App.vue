<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/header";
import axios from "axios";
export default {
  name: "App",
  components: {
    "v-header": header,
  },
  data() {
    return {
      seller: {},
    };
  },
  created() {
    axios.get("data.json").then((res) => {
      this.seller = res.data.seller;
      console.log(this.seller);
    });
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
