<!--主页头部设计-->
<template>
  <header>
    <el-row class="top">
      <el-col :span="6" :offset="1">
        <img src="./assets/logo/byyl-logo1.png" class="logoImg"/>
      </el-col>
      <el-col :span="5" :offset="12">
        <el-row style="line-height: 70px;">
          <el-col :span="3">
            <img src="./assets/images/antOutline-bell.svg" class="messageImg">
          </el-col>
          <el-col :span="3">
            <img src="./assets/images/profile.jpg" class="profileImg">
          </el-col>
          <el-col :span="16" style="text-align: left">
            <span class="profileSpan">用户名：光颜</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </header>
  <router-view/>
</template>

<style lang="less" scoped>
  .input-icon {
    height: 10px;
    width: 5px;
    margin-left: 2px;
  }
  .profileSpan {
    padding-left: 10px;
  }

  .logoImg {
    width: 150px;
    padding-left: 20px;
  }

  .messageImg {
    width: 25px;
    height: 25px;
  }

  .profileImg {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .top {
    height: 60px;
    border: 1px solid #C3C3C3;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  header {
    padding: 10px;

    a {
      font-weight: bold;
      color: #2c3e50;
      // &. 作用到同一个a标签上
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
