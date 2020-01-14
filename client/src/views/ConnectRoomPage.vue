<template>
  <div class="connect">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="24">
            <h1>Connect Room</h1>
            <div class="grid-content bg-purple">
              <el-input placeholder="Please input room id" v-model="roomName" clearable></el-input>
              <el-link v-if="this.roomName != ''" type="success">
                <a class="connect_but" v-bind:href="'room/'+roomName">Go to!!</a>
              </el-link>
            </div>
          </el-col>
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
      roomName: ""
    };
  }
};
</script>


<style scoped>
.connect_but {
  text-decoration: none;
  color: #f26101;
  display: block;
}
</style>