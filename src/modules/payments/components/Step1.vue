<template>
    <div class="my-component">

    
    <div >
      <div class="d-flex">
        <div class="w-75-responsive">
          <p ><span class="fw-bold">Película:</span>  {{ movie }}</p>
          <p ><span class="fw-bold">Sala:</span> {{ room }}</p>
          <p ><span class="fw-bold">Horario:</span> {{ schedule }}</p>
          <p ><span class="fw-bold">Asientos: </span>{{ chairs }}</p>
          <p ><span class="fw-bold">Valor: </span>${{format(total)}}</p>
        </div>
        <div class="d-none d-md-block"  >
          <img src="../assets/crispetas.gif" alt="grispetas">
        </div>
      </div>
      <button class="btn btn-dark w-100 mt-5" @click="nextStep">Siguiente</button>
       
    </div>
</div>
</template>

<script setup>
import fetchData from '../../../helpers/fetchData';
import {ref,computed, onMounted } from 'vue';
import {useStepsStore} from '../store/steps.js'
import { useRouter } from 'vue-router';
import {storeToRefs} from 'pinia';
import {useTicketStore} from '../../../stores/tickets.js';
const router = useRouter();
const useSteps=useStepsStore();
const{prevPinia,nextPinia,stepByNumber}=useSteps;
const ticketStore=useTicketStore();

        
 
//Estas son las variables  de la compra
  const total=ref(0);
  const movie=ref('');
  const room=ref('');
  const schedule=ref('');
  const chairs=ref('');
  //Propiedades Computadas
  const format=(value)=>{
    return value.toLocaleString('es-ES',{style:'currency',currency:'COP',maximumFractionDigits: 0})
  }
  const nextStep=()=>{
    nextPinia();
    router.push('/user/payment/step2');
  }

 
    onMounted(async()=>{
        stepByNumber(1);
        //Aquí traigo la data para pintarla dinámicamente
        const {ticketsToBuy,roomSelected}=storeToRefs(ticketStore);

        movie.value=roomSelected.value[0].movie.name;
        room.value=roomSelected.value[0].Room.name;
        schedule.value=roomSelected.value[0].hour;

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
    
  .my-component{
    font-family:Arial, Helvetica, sans-serif;
    background-color: white;
    padding: 50px;
    padding-top: 10px;
  }
  .form-check-input:checked {
  background-color: #000;
  border-color: #000;
}
.form-check-input:checked .form-check-label {
  color: #fff;

}
.form-check-input:focus {
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.5);
}
.form-check-input:checked+.form-check-label::before {
  background-color: #fff;
}
.form-check-input:checked:focus+.form-check-label::before {
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.5);
}
.form-switch .form-check-input:focus {
  border-color: #000;
}
.form-switch .form-check-input:checked {
  border-color: #000;
}
.form-switch .form-check-input:checked+.form-check-label::before {
  background-color: #000;
}
.form-switch .form-check-input:checked:focus+.form-check-label::before {
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.5);
}

.w-75-responsive{
  width:75%
}

@media(max-width:768px){
  .w-75-responsive{
    width: 100%;
  }
  
  .my-component{
    padding: 10px;
    padding-top: 10px;
  }
}


</style>