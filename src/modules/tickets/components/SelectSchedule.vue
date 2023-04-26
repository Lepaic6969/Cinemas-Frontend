<template>
   
    <select class="form-select"  v-model="reactiveVariable">
        <template v-for="(item,index) in data" :key="index" >
            <option :value="item" >{{item}}</option>
        </template> 
    </select>
</template>

<script>
    export default {
        props:{
            data:{
                type:Array,
                required:true
            }
        },
        data(){
            return {
               reactiveVariable:null,
            }
        },
        watch:{
            reactiveVariable(newReactiveVariable){
            console.log(newReactiveVariable)
             this.$emit('input',newReactiveVariable)
           }
        }
            
        
    }
</script>

<style>

</style>