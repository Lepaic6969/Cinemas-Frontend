<template>
    <div class="d-flex justify-content-between">
        <h2>{{ title }}:</h2>
         
        <n-button strong   size="large"   color="#039be5"
            @click="createAction" 
            data-bs-toggle="offcanvas" 
            :data-bs-target="`#${id}`"
            class="add_button"
            style="padding: 3vh;"
        > 
            <n-icon size="30" style="margin-top: -6px">
                <AddCircleOutline />
            </n-icon>
            <span style="font-size: 2vh;" >Agregar {{title}}</span>

        </n-button>
    </div>
  </template>
  
  <script setup>
  import {NIcon} from "naive-ui";
  import { AddCircleOutline } from "@vicons/ionicons5";
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    createAction:{
      type: Function,
      required:false
    }
  });
  </script>
  
<style scoped> 
     
</style>