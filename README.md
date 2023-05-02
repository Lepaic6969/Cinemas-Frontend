Proyecto de cine desarrollado con las tecnologías de Vue.js, Pinia, Naive UI y Bootstrap.
El despliegue del proyecto está en : https://cinefront.netlify.app/

Al iniciar el proyecto se encuentra esta primera interfaz donde podrá escoger el cine al que quiere ingresar.

![image](https://user-images.githubusercontent.com/71667791/235728010-438e362e-4200-4842-8cc5-f6a20ff50f40.png)

Una vez seleccionado el cine es momento de logearse (Hay 3 roles, el de administrador, el de vendedor y el de cliente) Las credenciales de ingreso son las siguientes:

- Vendedor

  - Email: seller@email.com
  - Contraseña: contraseña123

- Administrador

  - Email: admin@email.com
  - Contraseña: contraseña123

- Cliente
  - Email: camilo@gmail.com
  - Contraseña:123456

Funcionalidad para el usuario tipo Cliente y Vendedor:
Las funcionalidades del vendedor y del cliente son inicialmente las mismas, a continuación se detallan las funcionalidades que son similares para los dos casos:
Una vez realizado el login, se puede escoger la película que quiere ver:

![1](https://user-images.githubusercontent.com/82120052/235732248-dc996bba-efc3-4a34-a1ce-a7103d94a50c.png)


Al darle click en "trailer" se muestra un modal en pantalla con el triler de la película y al darle en "ver más" lo redirige hacia el lugar donde se puede escoger el horario y las sillas correspondientes para esa película.

![Screenshot from 2023-05-02 11-49-20](https://user-images.githubusercontent.com/82120052/235732280-4bdef9c5-0fb0-472b-8fc8-9b31c5f01994.png)

![2](https://user-images.githubusercontent.com/82120052/235732330-ba294902-a96d-49ae-bed4-a1955c9a8501.png)


Para seleccionar la sala y el horario en la película debe dar click en el botón de entradas. Una vez seleccionado, se podrá ver la siguiete interfaz donde se pueden apartar las sillas deseadas.

![Screenshot from 2023-05-02 11-49-43](https://user-images.githubusercontent.com/82120052/235732377-ef6a0c27-d7c7-4ae7-aa7d-7916cefa371e.png)


Las sillas en blanco indican sillas disponibles y las verdes son las sillas que ya están reservadas, para escoger una silla sólo basta darle click en alguna disponible.
Inmediatamente se muestra en la parte inferior izquierda un resumen a modo de prefactura, donde se detalla el costo y las sillas apartadas (Hay 3 tipos de sillas, generales, preferenciales y VIP). Acontinuación se muestra como se vería la pre-factura.

![3](https://user-images.githubusercontent.com/82120052/235732392-3adeb547-fcea-4095-a4dc-8bb57d78323a.png)

Una vez se quiera comprar los asientos escogidos se le da click al botón comprar que aparece en la prefactura, si el usuario logeado es vendedor sale directamente la factura en pantalla con la opción de imprimirla ,así:

![4](https://user-images.githubusercontent.com/82120052/235733098-0c183ed6-06d8-4f2c-97f2-9b214a619975.png)


![5](https://user-images.githubusercontent.com/82120052/235732834-8f2d9a4c-6e3b-493b-808c-b9dfd5e960aa.png)

Generando de esta forma un archivo con el nombre de factura.pdf.
Por otro lado si el usuario es un cliente antes de ir a la factura deberá ir a la pasarela de pagos para reservar definitivamente los asientos que ha escogido a través de su pago.

![image](https://user-images.githubusercontent.com/71667791/235727062-fd961b54-9641-4d13-8071-391ac3347eb2.png)
Una vez realizado el pago el usuario cliente ya podrá ver y descargar su factura.
