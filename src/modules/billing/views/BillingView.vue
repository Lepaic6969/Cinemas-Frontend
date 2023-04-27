<template>
      <div class="template-styles d-flex align-items-start">
        <div class="container  container-styles">
            <div class="row">
                <div class="col-md-9 col-12">
                    <h1>Resumen de la compra</h1>
                </div>
                <div class="col-md-3 col-12 ">
                    <QRComponent/>
                </div>
            </div>
         </div>
    </div>

</template>

<script setup>
    import QRComponent from '../components/QRComponent.vue';
</script>

<style scoped>
    .container-styles{
       background-color: white;
       border:1px solid #2b2b2b;
       padding: 35px;
       border-radius: 10px;
       min-height: 77vh;
       height: auto;
       width: 50%;
    }
    .container {
        box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.5);
    }
    .template-styles{
        background-color: #2b2b2b;
        width: 100%;
        min-height: 130vh;
        height: auto;
       
    }
</style>