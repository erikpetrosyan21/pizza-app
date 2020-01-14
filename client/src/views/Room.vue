<template>
  <div class="room">
    <el-container>
      <el-header>
        <el-row>
          <el-col class="header-col" :span="24">
            <h1>
              Your room id:
              <span class="roomID">{{id}}</span>
            </h1>
            <el-button @click="startRoom" type="success" plain>GO!!</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24"></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      socket: io("localhost:3000"),
      id: `${this.$route.params.id}`
    };
  },
  methods: {
    startRoom() {
      this.socket.emit("joinRoom", this.id);
    }
  },
  mounted() {
    this.socket.on("sendEvent", data => {
      console.log(data);
    });
  }
};
</script>


<style scoped>
.header-col > h1 {
  display: inline-block;
  margin-right: 20px;
}
.roomID {
  color: #f26101;
}
</style>