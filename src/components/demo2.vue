<template>
    <div id="SecondChild">
        <h1>{{message}}</h1>
    </div>
</template>
<script>
    import bus from './eventBus';
    export default{
        name:'SecondChild',
        data(){
            return {
                message: ''
            }
        },
        mounted(){
            var self = this;
            bus.$on('userDefinedEvent',function(message){
                self.message = message;//接值
            });
        }
    }
</script>