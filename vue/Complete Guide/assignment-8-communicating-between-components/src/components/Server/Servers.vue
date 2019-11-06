<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        class="list-group-item"
        @click="showDetail"
        v-for="server in servers"
        :key="server.id"
      >Server #{{ server.id }} ({{server.status}})</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Critical" },
        { id: 5, status: "Turn Off" }
      ],
      currectServer: {}
    };
  },
  methods: {
    showDetail(e) {
      const index = e.target.innerText.match(/[0-9]/g).join("");
      this.currectServer = this.servers[index - 1];
      this.$emit("statusWasChanged", this.currectServer);
    }
  }
};
</script>
    
<style>
li {
  cursor: pointer;
}
</style>
