<template >
    <div>
        <div class="searDiv">
            <el-input placeholder="请输入任务内容" class="elInput"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary" icon="el-icon-circle-plus-outline" @click="addNewTask">新增</el-button>
        </div>
    </div>
</template>

<script>
    import {get} from '../utils/request.js';

    //导入事件总线工具类
    import emitter from '../utils/eventbus.js';

    export default {
        components:{
        },
        methods:{
            addNewTask(){
                emitter.emit('addnewtask');
            }
        },
        data(){
            return {
            }
        }
    }
</script>

<style scoped>
    .elInput{
        width: 20%;
        margin-right: 1%;
        line-height: 40px;
    }
    .searDiv{
        text-align: left;
        line-height: 40px;
    }
</style>