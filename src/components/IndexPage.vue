<template>
    <div>
        <el-container>
            <el-header>自动外呼系统控制中台</el-header>
            <el-container>
                <el-aside width="200px">
                    <aside-menu></aside-menu>
                </el-aside>
                <el-main>
                    <main-menu></main-menu>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import AsideMenu from './AsideMenu.vue';
    import MainMenu from './MainMenu.vue';
    export default {
        components:{
            AsideMenu,
            MainMenu
        }
    }
</script>

<style scoped>
    .el-header {
    background-color: #657c9c;
    color: rgb(250, 246, 246);
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>