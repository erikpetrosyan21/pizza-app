<template>
  <div class="nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <a href="/">Home</a>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/connect">Connect</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  }
};
</script>

<style scoped>
a {
  display: block;
}
.el-menu-item {
  padding: 0;
  margin: 0 20px;
}
</style>