<template>
  <div
    class="offcanvas offcanvas-start  z-2 container-fluid"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel"
    style=" background-color: #007bff; color:#fff;"
  >
  <div class="offcanvas-header md-flex justify-content-md-end"> 
    <button
      type="button"
      class="btn btnClose"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    >
      <n-icon size="30" style="margin-top: -6px">
        <CloseOutline />
      </n-icon>
    </button>
  </div>
  
    <div class="offcanvas-header  text-center">
      <div class="box-logo"> 
        <img class="logo mx-auto" src="../../../../assets/a.png" alt="Logo" />
        
      </div>
      
    </div>
      <div class="offcanvas-body text-white text-center open-sans-bold">
        <router-link
          class="btn d-flex justify-content-start align-items-center"
          :to="{ name: 'admin-salas' }"
        >
          <n-icon size="30" style="margin-top: -6px">
            <TvSharp />
          </n-icon>
          <span class="material-symbols-outlined"> Salas</span></router-link
        >
        <router-link
          class="btn d-flex justify-content-start align-items-center"
          :to="{ name: 'admin-show' }"
        >
        
          <n-icon size="30" style="margin-top: -6px">
            <TicketSharp />
          </n-icon>
          <span class="material-symbols-outlined"> Funciones </span>
          </router-link
        >

      </div>
    </div>
</template>

<script setup>
  import {NIcon} from "naive-ui";
  import { TvSharp, TicketSharp,CloseOutline} from "@vicons/ionicons5";
    
</script>

<style scoped>
a {
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
  /* border-bottom: 1px solid #fff; */
  transition: 0.3s ease-in-out;
}
a > span {
  text-align: center;
  font-size: 1.5rem;
  margin: 0 0.5rem;
}
a:hover {
  width: 100%;
  transform: scale(1.1);
  color: #2b2b2b;
  background: #ffca0ad5;
}
.router-link-exact-active,
.router-link-exact-active:hover {
  width: 100%;
  transform: scale(1.1);
  color: #2b2b2b;
  background: #ffc90a;
}
.box-logo {
  width: 100%;  
}
.logo {
  height: 10vh;
}

.btnClose{
  color:#fff
}

.btnClose:hover{
  color:#ffc90a;
  border: #ffc90a 1px solid
}
</style>