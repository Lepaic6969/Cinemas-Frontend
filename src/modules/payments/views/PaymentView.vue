<template >
    <div class="template-styles d-flex align-items-center">
        <div class="container  container-styles">
            <div class="row">
                <div class="col-md-5 col-12">
                    <Steps/>
                </div>
                <div class="col-md-7 col-12 ">
                    <RouterView />
                </div>
            </div>
         </div>
    </div>
  
 
</template>

<script setup>
    import {RouterView} from 'vue-router'
    import Steps from '../components/Steps.vue'
 
</script>

<style scoped>
    .container-styles{
       background-color: white;
       border:1px solid #2b2b2b;
       padding: 25px;
       border-radius: 10px;
    }
    .template-styles{
        background-color: #2b2b2b;
        width: 100%;
        height: 100vh;
       
    }

</style>
