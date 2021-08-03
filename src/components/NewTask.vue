<template>
    <div>
        <el-dialog title="新建任务" :visible.sync="dialogVisible" width="35%" top='10px'>
            <el-form ref="form" :model="form" label-width="80px" class="myform">
                <el-form-item label="任务标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="被叫号码">
                    <el-input v-model="form.calledNum" placeholder="多个号码用英文;间隔"></el-input>
                </el-form-item>
                <el-form-item label="拨打时间">
                    <SelectTime @sentTime='handleTime'></SelectTime>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelDiaVis">取消</el-button>
                <el-button type="primary" @click="changeDiaVis">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import SelectTime from './SelectTime.vue';
    import emitter from '../utils/eventbus.js';
    export default {
        components:{
            SelectTime
        },
        created(){
            emitter.on('addnewtask',()=>{
                this.dialogVisible = true;
            });
            emitter.on('newTaskData',{
                callingTime:this.form.callingTime,
                calledNum:this.form.calledNum,
                title:this.form.title
            })
        },
        data(){
            return {
                dialogVisible:false,
                form:{
                    callingTime:'',
                    calledNum:'',
                    title:'',
                }
            }
        },
        methods:{
            changeDiaVis(){
                this.dialogVisible = false;
                emitter.emit('sentFormDate',this.form);
            },
            cancelDiaVis(){
                this.dialogVisible = false;
            },
            //取到控件中的日期
            handleTime(info){
                this.form.callingTime = info;
            },
        }
    }
</script>
    
<style scoped>
    .myform .el-input{
        width: 220px;
    }
    small{
        color: red;
    }
</style>