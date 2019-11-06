<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <li class="list-group-item" v-for="index in 5" :key="index">Server #{{ index }}</li>
        </ul>
      </div>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";

export default {
  components: {
    appHeader: Header,
    Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  }
};
</script>

<style>
</style>
