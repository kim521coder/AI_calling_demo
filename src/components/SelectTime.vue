<template>
    <div>
        <div class="block">
            <el-date-picker
            v-model="value3"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00"
            @change="(value) => changeHandler(value)">
            </el-date-picker>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pickerOptions: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }]
                },
                value1: '',
                value2: '',
                value3: ''
            };
        },
        emits:['sentTime'],
        methods:{
            changeHandler(){
                console.log(this.value3);
                this.$emit('sentTime',this.value3)
            }
        }
    }
</script>

<style scoped>

</style>