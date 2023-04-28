<template>
  <div class="my-component">
    
   

    <form @submit.prevent="makePayment">
      <div class="mb-3">
        <label for="payment-method" class="col-form-label fw-bold">Seleccione el de su preferencia:</label>
        <select class="form-select" aria-label="Default select example" id="payment-method" v-model="paymentMethod">
          <option selected disabled>--Modo de pago--</option>
          <option value="card" ><span>&#x1F4B3;</span> Tarjeta de crédito/debito</option>
          <option value="paypal"  ><span>&#x1F4B5;</span>  Paypal</option>
          <option value="QR"  ><span>📲</span> Generar Código QR</option>
        </select>
        
      </div>
      <div class="mb-5 mt-5" v-if="paymentMethod==='paypal'">
        <p>Para completar la transacción, te enviaremos a los servidores seguros de PayPal.
        </p>
        <p>
          ⚠️ Lo sentimos, PayPal no procesa pagos en COP. Por tanto, tu compra se hará en USD.
          <span class="fw-bold">
              PayPal te cobrará un importe de {{(total/4654).toLocaleString('eu-EU',{style:'currency',currency:'USD',maximumFractionDigits: 2})}}.
          </span>
          
        </p>
      </div>
      <div v-if="paymentMethod==='card'" class="mt-1">
          <div class="mb-3">
              <label for="cardName" class="form-label fw-bold">Nombre de la tarjeta</label>
              <input type="text" class="form-control" id="cardName" placeholder="Nombre en la tarjeta" v-model="cardName">
              <div  class=" text-danger fw-normal" v-if="!cardNameOk">Recuerde llenar el nombre de su tarjeta</div>
              
          </div>
            <div class="mb-3">
              <label for="cardNumber" class="form-label fw-bold">Número de tarjeta</label>
              <input type="number" class="form-control" id="cardNumber" placeholder="0000 0000 0000 0000" v-model="cardNumber">
              <div  class=" text-danger fw-normal" v-if="!cardOk">Recerde ingresar un numero de tarjeta válido.</div>
            </div>
            <div class="d-md-flex justify-content-between">
              <div class="mb-3 w-45">
                  <label for="cvc" class="form-label fw-bold">CVC/CVV</label>
                  <input type="number" class="form-control " id="cvc" placeholder="CVC" v-model="cvcNumber">
                  <div  class=" text-danger fw-normal" v-if="!cvcOk">Recuerde que el CVC es un número positivo de 3 o 4 cifras.</div>
                </div>
                <div class="mb-3 w-45">
                  <label for="expiration-date" class="form-label fw-bold ">Fecha de vencimiento</label>
                  <input type="date" class="form-control " id="expiration-date" v-model="expirationDate">
                  <div  class=" text-danger fw-normal" v-if="!dateOk">La tarjeta ya expiró o no se ingresó su fecha</div>
                </div>
            </div>
           
      </div>
      <QRComponent v-if="paymentMethod==='QR'"/>
     
      <div class="mt-3 w-100">
              <input type="submit" value="Pagar" class="btn btn-dark w-100" v-if="paymentMethod!==''">
      </div>
    </form>
  </div>

</template>

<script setup >
  import { useRouter } from 'vue-router';
  import QRComponent from './QRComponent.vue';
  import {ref,onMounted} from 'vue';
  import {useStepsStore} from '../store/steps.js';
  import {storeToRefs} from 'pinia';
  import {useTicketStore} from '../../../stores/tickets.js';
  import fetchData from '../../../helpers/fetchData';
  const ticketStore=useTicketStore();
  const {ticketsBuy}=storeToRefs(ticketStore); // En el .value trae -> ['27','33'];
      


  const useSteps=useStepsStore();
  const{prevPinia,nextPinia,stepByNumber}=useSteps;
  const router = useRouter();
  const paymentMethod=ref('');
  //Estas son variables para la validación
  const cardNameOk=ref(true);
  const cardOk=ref(true);
  const cvcOk=ref(true);
  const dateOk=ref(true);
  //Estos son las variables de los campos
  const cardName=ref('')
  const cardNumber=ref('')
  const cvcNumber=ref('')
  const expirationDate=ref('')
   //Total de la compra aplicando costes de envío y descuentos por cupones.
  const total=ref(0);

  


  const validateData=()=>{
      let flag=true
      //1. Validación para que el nombre de la tarjeta no sea un campo vacío.
      if(cardName.value===''){
        cardNameOk.value=false;
        flag=false
      }else{
        cardNameOk.value=true
      }
      //4293530017454209
      //2. Validación para tarjetas: Visa para 16 y 13 dígitos, Mastercard y discover
      let regExp=/^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/
      if(!(regExp.test(cardNumber.value.toString()))){
        cardOk.value=false;
        flag=false
      }else{
          cardOk.value=true;
        }
      //3.Validación para el CVC.
      if(!((cvcNumber.value.toString().length===3 ||cvcNumber.value.toString().length===4)&&cvcNumber.value>0)){
        cvcOk.value=false;
        flag=false
      }else{
        cvcOk.value=true;
      }
      
      //4.Validación de la fecha
      const currentDate=new Date()
      const currentExpirationDate=new Date(expirationDate.value)
      
      if((currentExpirationDate.getTime()-currentDate.getTime())<0 || expirationDate.value===''){
        dateOk.value=false;
        flag=false
      }else{
        dateOk.value=true
      }
      return flag
    };
    const makePaymentCard=()=>{
      const rightInformation=validateData()
      if(rightInformation){
        nextPinia();
        router.push('/payment/step3');
        makeRequest(ticketsBuy.value.tickets);
        //Hecha con éxito la transacción, se procede a borrar el formulario y resetear el formulario.
        cardName.value='' 
        cardNumber.value=''
        cvcNumber.value=''
        expirationDate.value=''
        paymentMethod.value=''
        
      }else{
        return
      }
    };
    const makePaymentPaypal=()=>{
      //Por ahora sin validaciones en Paypal, hace la compra directamente.
      nextPinia();
      router.push('/user/payment/step3');
      makeRequest(ticketsBuy.value.tickets);
       //Hecha con éxito la transacción, se procede a borrar el formulario y resetear el formulario.
       cardName.value='' 
       cardNumber.value=''
       cvcNumber.value=''
       expirationDate.value=''
       paymentMethod.value=''
      

    };
    const makePayment=()=>{
      (paymentMethod.value==='card')?makePaymentCard():makePaymentPaypal()
    };
    const makeRequest=async(tickets)=>{
      console.log("NOTA: Aún no tenemos persistencia de datos, para las sillas");
      // const dataRequest=  {
      //   tickets:[Number(tickets[0]),Number(tickets[1])],
      //   data: {
      //       status: false
      //   }
      // }
      // try{
      //   console.log(dataRequest.tickets);
      //   await fetchData("/tickets","put",dataRequest);
      // }catch(err){
      //   console.log(err);
      // }
    }

   
    

    onMounted(()=>{
      stepByNumber(2);
      total.value=Number(localStorage.getItem("total"));
    });
</script>

<style scoped>
  .my-component{
    font-family:Arial, Helvetica, sans-serif;
    background-color: white;
    padding: 50px;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 10px;
  }
  
@media(max-width:768px){
  
  .my-component{
    padding: 10px;
  }
}

</style>