<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>

    <el-row>
      <p>
        当增加了 <b>is-loading</b> 类时，图标可以每两秒完整转 360 度，你也可以覆写该属性
      </p>
      <el-icon :size="20">
        <edit />
      </el-icon>
      <el-icon color="#409EFC" class="no-inherit">
        <share />
      </el-icon>
      <el-icon>
        <delete />
      </el-icon>
      <el-icon class="is-loading">
        <loading />
      </el-icon>
      <el-button type="primary">
        <el-icon style="vertical-align: middle;">
          <search />
        </el-icon>
        <span style="vertical-align: middle;"> 搜索 </span>
      </el-button>

      <el-icon><camera /></el-icon>
    </el-row>
    <el-row>
      <img src="../assets/icons/svg/antOutline-control.svg">
    </el-row>
    <el-row>
      svg内容：
      <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon"/>
    </el-row>
  </div>
</template>
