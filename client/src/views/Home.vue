<template>
  <div class="home">
    <el-container>
      <el-header>
        <h1>Welcome to pizzaTomo !</h1>
      </el-header>
      <el-main>
        <el-row>
          <h2>
            Click to start
            <i style="font-size: 25px" class="el-icon-bottom"></i>
          </h2>
          <el-button class="but-home" plain>
            <a class="roomButtom" v-bind:href="'room/'+uniqID">
              Go to my Pizza kitchen : {{uniqID}}
              <i style="font-size: 16px" class="el-icon-user"></i>
            </a>
          </el-button>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uniqID: null
    };
  },
  methods: {
    generateUniqId() {
      return (
        "F" +
        Math.random()
          .toString(36)
          .substr(2, 9)
      );
    }
  },
  mounted() {
    this.uniqID = this.generateUniqId();
  }
};
</script>


<style>
.el-header,
.el-footer {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /* background-color: #F26101; */
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.roomButtom {
  text-decoration: none;
  color: #f26101;
  padding: 20px;
  display: block;
}

.but-home {
  padding: 0 !important;
}
.el-main {
  border: 1px solid #f7f3f3;
  line-height: 50px !important;
}
h1,
h2 {
  font-family: sans-serif;
  color: #8a8a8a;
}
</style>