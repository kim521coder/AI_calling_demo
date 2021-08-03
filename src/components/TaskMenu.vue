<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%">

            <el-table-column
                label="创建日期"
                width="200">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.createDate }}</span>
                </template>
            </el-table-column>

            <el-table-column
                label="拨打日期"
                width="200">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.callingDate }}</span>
                </template>
            </el-table-column>

            <el-table-column
                label="名单数量"
                width="200">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.calledNumCounter }}</el-tag>
                    </div>
                </template>
            </el-table-column>

            <el-table-column
                label="任务标题"
                width="300">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.taskTitle }}</el-tag>
                    </div>
                </template>
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    :type="scope.row.colStatus==false?'primary':'warning'"
                    @click="handleEdit(scope.$index, scope.row)"
                    v-model="scope.row.colStatusTag">{{scope.row.colStatusTag}}</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除任务</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios';
    import emitter from '../utils/eventbus.js';
    import {get} from '../utils/request.js';
    import {numberCheck} from '../utils/numbercheck.js';
    export default {
        data() {
            return {
                tableData: [],
            }
        },
        methods: {
            //发送请求，开启任务
            handleEdit(index, row) {
                console.log(index,row,row.callingDate,row.calledNum);
                get('/api/v1/products',{
                    callingSentTime:row.callingDate,
                    calleeNum:row.calledNum,
                }).then(res=>{
                    if (res.status>=200&&res.status<300) {
                        row.colStatus = true;
                        row.colStatusTag = '结束任务'
                    }
                })
            },
            //动态修改button的type
            buttonType(row){
                return row.colStatus==true?'warning':'primary';
            },
            //删除行
            handleDelete(index, row) {
                this.tableData.splice(index,1);
            },
            //格式化时间
            dateFormate(d){
                let date = new Date(d);
                if (d==='') {
                    return null
                }else{
                    return date.getFullYear() + '-' + 
                           ((date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):(date.getMonth() + 1)) + '-' + 
                           (date.getDate()<10?'0'+date.getDate():date.getDate()) + ' ' + 
                           (date.getHours()<10?'0'+date.getHours():date.getHours()) + ':' + 
                           (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':' + 
                           (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds());
                }
            },
        },
        created(){
            emitter.on('sentFormDate',(info)=>{
                this.tableData.push({
                    createDate:this.dateFormate(new Date()),
                    callingDate:this.dateFormate(info.callingTime),
                    calledNum:numberCheck(info.calledNum),
                    calledNumCounter:numberCheck(info.calledNum).length,
                    taskTitle:info.title,
                    colStatus:false,
                    colStatusTag:'开启任务'
                })
            })
        }
    }
</script>

<style scoped>
    /* 深度选择器 */
    ::v-deep .el-table__header-wrapper{
        line-height: 50px;
    }
    ::v-deep .cell{
        text-align: center;
    }
</style>