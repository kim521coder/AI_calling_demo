<template>
    <div class="welcome">
        <div>
            <p>自动外呼系统演示</p>
            <transition name="tripple" appear>
                <i class="iconfont icon-zanting"
                       @click="pauseClick">
                </i>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name:'welcome',
        emits:['welcomeChange'],
        methods:{
            pauseClick(){
                this.$emit('welcomeChange')
            }
        },
        data(){
            return {
                info:"Welcome"
            }
        }
    }
</script>

<style scoped>
    .welcome{
        background-image: url("../assets/ai.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        height: 700px;
    }
    .welcome>div>p{
        color: white;
        font-family: 'Courier New', Courier, monospace;
        font-size: 100px;
        width: 100%;
        text-align: center;
        display: inline-block;
    }
    .iconfont{
        color: white;
        font-size: 50px;
        font-weight: bold;
        position: absolute;
        right: 200px;
        top: 500px;
    }
    .iconfont:hover{
        transform: scale(1.2);
        cursor: pointer;
    }
    .tripple-enter-active,
    .tripple-leave-active{
        animation: toggle 1s ease-in;
        animation-iteration-count: infinite;
    }
    @keyframes toggle{
        0%{
            transform: scale(1);
            opacity: 1;
        }
        50%{
            transform: scale(1.2);
            opacity: 0.3;
        }
        100%{
            transform: scale(1);
            opacity: 1;
        }
    }

</style>