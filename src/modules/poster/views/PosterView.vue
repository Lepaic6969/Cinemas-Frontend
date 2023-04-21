<template>
   <div class="contenedor">
        <div class="elemento1">
            <div class="contenedor-logo">
                <img src="../assets/Daco_4071008 1.png" alt="logo"> <!--***************Logo de la peli************-->
                <div class="texto">
                    <h1>¡DISPONIBLE AHORA!</h1>
                    <p>Ha llegado el momento de Loki. Una nueva serie original, transmitida exclusivamente en Disney +.</p>
                </div>
                <button>IR A DISNEY+</button>
            </div>
        </div>
        <div class="elemento2">
       
        </div>
    </div>
</template>

<script setup>
    
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
*{
    margin: 0;
    padding: 0;
}
.contenedor{
    width: 100%;
    height: auto;
    background:white;
    display: flex;
    background-image: url(../assets/img.png); /******************* Imagen de Poster**********/
    background-position: center center; 
    background-size: cover;
    background-repeat: no-repeat;
    clip-path: polygon(0% 0%,100% 0%,100% 88%,0% 100%);
  
}


.elemento1{
    width: 50%;
    height: 100%;
    background-color: #070;
    background-color: rgb(32,32,32);
   
    clip-path: polygon(0% 0%,85% 0%,100% 100%,0% 100%);
}
.elemento2{
    width: 50%;
    height: 100%;
    clip-path: polygon(0% 0%,100% 0%,100% 100%,0% 100%);
}

.contenedor-logo{
    width: 60%;
    height: 34%;
    margin: 229px 188px 276px 83px;
}
.contenedor-logo img{
    width: 164px;
    margin-bottom: 24px;
}
.contenedor-logo .texto h1{
    color:white;
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 8px;
 
  
}
.contenedor-logo .texto p{
    color:white;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-bottom: 24px;
}
.contenedor-logo button{
    font-family: 'Roboto', sans-serif ;
    font-weight: 700;
    font-size: 15px;
    color:white;
    background-color: rgba(27, 144, 252, 1);
    width: 158px;
    height: 51px;
    border-radius: 53px;
}
/* Estilos para pantalla grande */

@media(max-width:1440px){
   
    .contenedor{
        background-position: -300px center; 
        height: 1024px;
        
      }
      .contenedor-logo{
        margin: 337px auto;
    }
    
}

@media(max-width:1422px){
    .contenedor{
        background-position: -400px center; 
        height: 1024px;
        
      }
}
@media(max-width:1300px){
    .contenedor{
        background-position: -500px center; 
        height: 1024px;
        
      }
}
@media(max-width:1100px){
    .contenedor{
        background-position: -570px center; 
        height: 1024px;
        
      }
}


/* Estilos para Tablet */

@media(max-width:1012px){
   
    .elemento1,.elemento2{
        width: 100%;
        height: 50%;
        clip-path: polygon(0% 0%,100% 0%,100% 100%,0% 100%);
        
       
    }
    .elemento1{
        order: 2;
    }
    .elemento2{
        order:1;
        height: 57%;
        background-image: url(../img/img.png); /******************* Imagen de Poster**********/
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        
    }
    .contenedor{
      height: 1024px;
       flex-direction: column;
        background: white;
        clip-path: polygon(0% 0%,100% 0%,100% 92%,0% 100%);
      
    }
    .contenedor-logo{
        width: 83%;
        height: 34%;
        margin: 40px auto;
    }
    .contenedor-logo h1{
        font-size: 40px;
    }
    .contenedor-logo img{
        width: 193px;
        margin-bottom: 24px;
    }
    .contenedor-logo .texto p{
        width: 90%;
        font-size: 16px;
    }
    .contenedor-logo button{
        display: block;
        margin: 0 auto;
        width:100% ;
    }

}


@media(max-width:960px){
    .elemento2{
       
     
        background-position: -10px center;

        
    }

}
@media(max-width:900px){
    .elemento2{
        background-position: -50px center;
    }

}
@media(max-width:850px){
    .elemento2{
        background-position: -100px center;
    }
}
@media(max-width:800px){
    .elemento2{
        background-position: -150px center;
    }
}
@media(max-width:750px){
    .elemento2{
        background-position: -200px center;
    }
}
@media(max-width:700px){
    .elemento2{
        background-position: -250px center;
    }
}
@media(max-width:650px){
    .elemento2{
        background-position: -300px center;
    }
}



/* Estilos para móvil */
@media(max-width:600px){
  
    .contenedor{
        height:800px;
        width: 100%;
        background-color: rgb(32,32,32);
      }
    .elemento2{
       
        height: 42%;
        background-image: url(../assets/img.png);  /******************* Imagen de Poster**********/
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        
    }
    .contenedor-logo{
      
        margin: 35px auto;
        height: 212px;
        width: 86%;
    }
    .contenedor-logo img{
        width: 25%;
    } 
    .contenedor-logo h1{
        font-size: 24px;
    }
    .contenedor-logo p{
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 24px;
    }
    .contenedor-logo button{
        display: block;
        margin: 0 auto;
        width:100% ;
    }
   
}
@media(max-width:560px){
    .elemento2{
        background-position: -20px center;
    }
    
}
@media(max-width:520px){
    .elemento2{
        background-position: -60px center;
    }
    
}
@media(max-width:480px){
    .elemento2{
        background-position: -100px center;
    }
    
}
@media(max-width:440px){
    .elemento2{
        background-position: -140px center;
    }
    
}
@media(max-width:400px){
    .elemento2{
        background-position: -180px center;
    }
    
}
@media(max-width:360px){
    .elemento2{
        background-position: -220px center;
    }
    
}
@media(max-width:320px){
    .elemento2{
        background-position: -260px center;
    }
    
}
@media(max-width:280px){
    .elemento2{
        background-position: -300px center;
    }
    
}
@media(max-width:240px){
    .elemento2{
        background-position: -340px center;
    }
    
}
</style>