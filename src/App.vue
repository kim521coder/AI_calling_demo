<template>
    <div>
        <component :is="currentTab==='Welcome'?'Welcome':'IndexPage'" 
                   @welcomeChange='changePage'>
        </component>
    </div>
</template>

<script>
    import Welcome from './components/Welcome.vue';
    import IndexPage from './components/IndexPage.vue';
    export default {
        components:{
            Welcome,
            IndexPage
        },
        data(){
            return {
                currentTab:'Welcome'
            }
        },
        methods:{
            changePage(info){
                this.currentTab='IndexPage';
            }
        }

    }
</script>

<style scoped>

</style>