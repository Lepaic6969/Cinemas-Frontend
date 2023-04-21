<template>
  
    <div class="offcanvas offcanvas-end" style=" background-color: #007bff; color:#fff"  tabindex="-1" id="offcanvasTypes" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
     
</script>