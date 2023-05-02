Este es un proyecto de cine desarrollado con las tecnologías de Vue.js, Pinia, Naive UI y Bootstrap.
El despliegue del proyecto está en : https://cinefront.netlify.app/

Al iniciar el proyecto se encuentra esta primera interfaz donde podrá escoger el cine al que quiere ingresar.
![image](https://user-images.githubusercontent.com/71667791/235728010-438e362e-4200-4842-8cc5-f6a20ff50f40.png)
Una vez seleccionado el cine es momento de logearse (Hay 3 roles, el de administrador, el de vendedor y el de cliente) Las credenciales de ingreso son las siguientes:
Vendedor -> Email: seller@email.com Contraseña: contraseña123
Administrador -> Email: admin@email.com Contraseña: contraseña123
Cliente -> Email:camilo@gmail.com Contraseña:123456

Funcionalidad para el usuario tipo Cliente y Vendedor:
Las funcionalidades del vendedor y del cliente son inicialmente las mismas, a continuación se detallan las funcionalidades que sn similares para los dos casos:
Una vez realizado el login, se puede escoger la película que quiere ver:
![image](https://user-images.githubusercontent.com/71667791/235721218-f651313b-23c2-4418-b0dd-a01d6b1e0827.png)
Al darle click en "trailer" se muestra un modal en pantalla con el triler de la película y al darle en "ver más" lo redirige hacia el lugar donde se puede escoger el horario y las sillas correspondientes para esa película.
![image](https://user-images.githubusercontent.com/71667791/235722086-991f187d-1265-49f3-a501-7c383e7aa9ff.png)
Para seleccionar la sala y el horario en la película debe dar click en el botón de entradas. Una vez seleccionado, se podrá ver la siguiete interfaz donde se pueden apartar las sillas deseadas.
![image](https://user-images.githubusercontent.com/71667791/235722693-f148a2f4-afaf-4cc4-8be1-f577ea57a727.png)
Las sillas en blanco indican sillas disponibles y las verdes son las sillas que ya están reservadas, para escoger una silla sólo basta darle click en alguna disponible.
Inmediatamente se muestra en la parte inferior izquierda un resumen a modo de prefactura, donde se detalla el costo y las sillas apartadas (Hay 3 tipos de sillas, generales, preferenciales y VIP). Acontinuación se muestra como se vería la pre-factura. 
![image](https://user-images.githubusercontent.com/71667791/235723774-dce8297f-3ba3-4337-ab2e-ca98a74c8b5d.png)

Una vez se quiera comprar los asientos escogidos se le da click al botón comprar que aparece en la prefactura, si el usuario logeado es vendedor sale directamente la factura en pantalla con la opción de imprimirla ,así:
![image](https://user-images.githubusercontent.com/71667791/235725557-f7c61fb6-c284-4fa4-81cb-ced3f54f09c5.png)
Generando de esta forma un archivo con el nombre de factura.pdf.
Por otro lado si el usuario es un cliente antes de ir a la factura deberá ir a la pasarela de pagos para reservar definitivamente los asientos que ha escogido a través de su pago.
![image](https://user-images.githubusercontent.com/71667791/235727062-fd961b54-9641-4d13-8071-391ac3347eb2.png)
Una vez realizado el pago el usuario cliente ya podrá ver y descargar su factura.

