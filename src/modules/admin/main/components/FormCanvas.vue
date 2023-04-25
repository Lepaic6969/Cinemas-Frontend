<template>
  
    <div class="offcanvas offcanvas-end" style=" background-color: #007bff; color:#fff"  tabindex="-1" id="offcanvasTypes" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn btnClose" data-bs-dismiss="offcanvas" aria-label="Close">
          <n-icon size="30" style="margin-top: -6px">
            <CloseOutline />
          </n-icon>
        </button>
      </div>
      <div class="offcanvas-body">
       <div class="container-form">
          <div class="container body" id="registration-form">
            
            <div >
                 <slot>
                    
                 </slot>
            </div>
          </div>
       </div>
        
      </div>
    </div>
</template>

<script setup>
  import {NIcon} from "naive-ui";
  import { CloseOutline} from "@vicons/ionicons5";
    
</script>

<style scoped>
.btnClose{
  color:#fff
}

.btnClose:hover{
  color:#ffc90a;
  border: #ffc90a 1px solid
}
</style>