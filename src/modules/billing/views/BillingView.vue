<template>
      
      <div class="template-styles d-flex align-items-start mt-5 row ">
        
        <div class="container  container-styles  mb-3" v-for="chair in chairsArr" :key="chair.id">
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
                    <label>Asiento:</label>
                    <div class="container-black">
                        {{ chair.seatNumber}}
                    </div>
                    <br>
                    <label>Total:</label>
                    <p>${{format( chair.price)}}</p>
                                 
                <div class="container-QR">
                    <!-- <QRComponent /> -->
               </div> 
         </div>
         
         <button class="btn btn-outline-dark ms-2 w-auto btn-print" @click="handlePrint" id="btn-print">🖨️ <span class="d-none d-md-block">Imprimir</span> </button>
    </div>

   

</template>

<script setup>
    import QRComponent from '../components/QRComponent.vue';
    import {ref,onMounted,onBeforeMount} from 'vue';
    import {storeToRefs} from 'pinia';
    import {useTicketStore} from '../../../stores/tickets.js';
    import jsPDF from 'jspdf';
  

    const ticketStore=useTicketStore();
   //Variables reactivas...
   const total=ref(0);
   const movie=ref('');
   const room=ref('');
   const chairsArr=ref([{id:1},{id:2},{id:3},{id:4}]);

    const handlePrint=()=>{
        //Variable para generar el PDF
        const doc = new jsPDF();
        const facturaHTML=document.querySelector('.template-styles');
        const btnPrint=document.getElementById("btn-print");
        facturaHTML.removeChild(btnPrint);
        html2canvas(facturaHTML).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 10, 10, 220, 240);
        doc.save('factura.pdf');
        });
        
    }
    const format=(value)=>{
    return value.toLocaleString('es-ES',{style:'currency',currency:'COP',maximumFractionDigits: 0})
  }
    onMounted(()=>{
           
    
    });
    onBeforeMount(()=>{
         //Aquí lo de la factura para que sea dinámica...
         const {ticketsToBuy,roomSelected}=storeToRefs(ticketStore);

        movie.value=roomSelected.value[0].movie.name.toUpperCase();
        room.value=roomSelected.value[0].Room.name.toUpperCase();

        //Esto es para el string de sillas.
        chairsArr.value=ticketsToBuy.value;
        console.log(chairsArr.value)

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
       width: 28%;
       position: relative;
       margin-left:0 !important;
       margin-right:20px !important;
    }
    .container-styles-print{
       background-color: white;
       border:1px solid #2b2b2b;
       padding: 35px;
       /* padding-right:0; */
       border-radius: 10px;
       min-height: 77vh;
       height: auto;
       width: 70%;
       position: relative;
    }
    .container {
        box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.5);
    }
    .template-styles{
        background-color: white;
        width: 100%;
        min-height: 130vh;
        height: auto;
       
    }
    .container-QR{
        /* position: absolute;
        right: -30%;
        bottom: 0px; */
    }
    .container-black{
        width: 100%;
        height: 30px;
        color:white;
        background-color: #2b2b2b;
        text-align: center;
        margin-top: 0;
    }
    .btn-print{
        position:fixed;
        top: 25%;
        right: 5%;
        padding: 0 10px !important;
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
            width: 90%;
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