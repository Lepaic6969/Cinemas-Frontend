<template>
      <div class="template-styles d-flex align-items-start">
        <div class="container  container-styles">
            <div class="row">
                <div class="col-12">
                    <h5>Cine Cimema SAS</h5>
                    <p>NIT: 1010887372-0</p>
                    
                    <label>Película:</label>
                    <div class="container-black">
                        TITULO DE LA PELÍCULA
                    </div>
                    
                    <label>Ubicación:</label>
                    <div class="container-black">
                        NOMBRE DE LA SALA
                    </div>
                    <label>Asientos:</label>
                    <div class="container-black">
                        G1 P2 V3
                    </div>
                    <br>
                    <label>Total:</label>
                    <p>$40.000</p>
                </div>
                
                <div class="col-12  container-QR">
                    <QRComponent class="QR"/>
                </div>
               
            </div>
            <button class="btn btn-outline-dark">Imprimir</button>
         </div>
         
    </div>

</template>

<script setup>
    import QRComponent from '../components/QRComponent.vue';
    import {ref,onMounted} from 'vue';
    const date=ref(null);

    onMounted(()=>{
        date.value=new Date().toLocaleDateString();
    })
</script>

<style scoped>
    .container-styles{
       background-color: white;
       border:1px solid #2b2b2b;
       padding: 35px;
       /* padding-right:0; */
       border-radius: 10px;
       min-height: 77vh;
       height: auto;
       width: 30%;
       position: relative;
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
    .container-QR{
        position: absolute;
        right: -30%;
        bottom: 0px;
    }
    .container-black{
        width: 100%;
        height: 30px;
        color:white;
        background-color: #2b2b2b;
        text-align: center;
        margin-top: 0;
    }
    
    @media(max-width: 992px){
        .container-styles{
            width: 50%;
        }
    }
    @media(max-width: 768px){
        .container-styles{
            width: 60%;
        }
    }
    @media(max-width: 567px){
        .container-styles{
            width: 100%;
        }
    }

    @media(max-width:410px){
        .container-QR{
        position: absolute;
        right: -25%;
        bottom: 0px;
        }
    }
    @media(max-width:335px){
        .container-QR{
        position: absolute;
        right: -20%;
        bottom: 0px;
        }
    }
</style>