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
            <el-button v-if="buttonHide" @click="startRoom" type="success" plain>GO!!</el-button>
          </el-col>
        </el-row>
      </el-header>
      <!-- <el-main> -->
      <!-- <el-row> -->
      <!-- <el-col :span="24"> -->
      <Transfer></Transfer>
      <!-- </el-col> -->
      <!-- </el-row> -->
      <!-- </el-main> -->
    </el-container>
  </div>
</template>

<script>
import io from "socket.io-client";
import Transfer from "../components/Transfer.vue";

export default {
  components: {
    Transfer
  },
  data() {
    return {
      socket: io("http://10.33.40.71:3000"),
      id: `${this.$route.params.id}`,
      buttonHide: true
    };
  },
  methods: {
    startRoom() {
      this.socket.emit("joinRoom", this.id);
      this.buttonHide = false;
    },
    notification() {
      this.$notify({
        title: "Success",
        message: "User is connected to room!",
        type: "success"
      });
    }
  },
  mounted() {
    this.socket.on("sendEvent", data => {
      console.log(data);
    });

    this.socket.on("notifConnect", data => {
      console.log(data);
      this.notification();
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