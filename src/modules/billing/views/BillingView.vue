<template>
      <div class="template-styles d-flex align-items-start">
        <div class="container  container-styles">
            <div class="row">
                <div class="col-12">
                    <h5>Cine Cimema SAS</h5>
                    <p>NIT: 1010887372-0</p>
                    
                    <label>Película:</label>
                    <div class="container-black">
                        {{ movie }}
                    </div>
                    
                    <label>Ubicación:</label>
                    <div class="container-black">
                        {{ room }}
                    </div>
                    <label>Asientos:</label>
                    <div class="container-black">
                        {{ chairs }}
                    </div>
                    <br>
                    <label>Total:</label>
                    <p>${{format( total )}}</p>
                </div>
                
                <div class="col-12  container-QR">
                    <QRComponent class="QR"/>
                </div>
               
            </div>
            <button class="btn btn-outline-dark" @click="handlePrint">Imprimir</button>
         </div>
         
    </div>

</template>

<script setup>
    import QRComponent from '../components/QRComponent.vue';
    import {ref,onMounted} from 'vue';
    import {storeToRefs} from 'pinia';
    import {useTicketStore} from '../../../stores/tickets.js';
    const ticketStore=useTicketStore();
   //Variables reactivas...
   const total=ref(0);
   const movie=ref('');
   const room=ref('');
   const chairs=ref('');

    const handlePrint=()=>{
        alert("Estamos desarrollando la funcionalidad de la impresión de la factura.")
    }
    const format=(value)=>{
    return value.toLocaleString('es-ES',{style:'currency',currency:'COP',maximumFractionDigits: 0})
  }
    onMounted(()=>{

        //Aquí lo de la factura para que sea dinámica...
        const {ticketsToBuy,roomSelected}=storeToRefs(ticketStore);

        movie.value=roomSelected.value[0].movie.name.toUpperCase();
        room.value=roomSelected.value[0].Room.name.toUpperCase();

        //Esto es para el string de sillas.
        const chairsArr=ticketsToBuy.value;
        chairsArr.forEach(el=>{
          chairs.value+=el.seatNumber+' ';
        })
        //Esto es para el total de la compra
        ticketsToBuy.value.forEach(el=>{
          total.value+=el.price;
        });
        localStorage.setItem("total",total.value);
    });
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