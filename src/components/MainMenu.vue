<template>
    <div class="task">
        <AddTask></AddTask>
        <NewTask></NewTask>
        <el-divider></el-divider>
        <TaskMenu></TaskMenu>
    </div>
</template>

<script>
    import AddTask from './AddTask.vue';
    import NewTask from './NewTask.vue';
    import TaskMenu from './TaskMenu.vue';
    export default {
        components:{
            AddTask,
            NewTask,
            TaskMenu
        }
    }
</script>

<style scoped>
</style>