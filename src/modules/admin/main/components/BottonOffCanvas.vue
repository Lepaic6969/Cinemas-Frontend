<template>
    <button id="tog" class="btn btnClose mx-4 mt-2"   type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <n-icon size="30" style="margin-top: -6px">
            <Menu />
        </n-icon>
    </button>
</template>

<script setup>
  import {NIcon} from "naive-ui"; 
  import {Menu} from "@vicons/ionicons5";
  
</script>

<style scoped>
    .btnClose{
        color:#ffc90a;
        background-color: #039be5;
    }

    .btnClose:hover{
        color:#039be5;
        border: #039be5 1px solid;
        background-color: #ffff;
    }
</style>