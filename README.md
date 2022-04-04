# 🍟 Burgerland 🍔

![BURGERLAND (1)](https://user-images.githubusercontent.com/91855816/161407720-7d8ffad4-b7ed-4ec8-920b-eb91e9c7fd13.png)

## Index

* [1. Sobre el proyecto](#1-sobre-el-proyecto)
* [2. Prototipado](#2-prototipado)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Vista final](#4-vista-final)
* [5. Tecnologias implementadas](#5-tecnologias-implementadas)

## 1. Sobre el proyecto 

Burgerland es una interfaz en la que el/la mesero/a puede tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente consumiendo una `API REST` proporcionada previamente por el backend junto con su [documentación](https://laboratoria.github.io/burger-queen-api/) que especifica el comportamiento esperado. El usuario puede ir eligiendo qué productos agregar/eliminar. La interfaz a su vez muestra el resumen del pedido con el costo total de la orden y de cada producto según la cantidad. La aplicación es una `Single Page App`, se puede usar como una [PWA](https://codigofacilito.com/articulos/progressive-apps) y de manera `offline`.

## 2. Prototipado

  ### Login
  * Horizontal
  
  ![image](https://user-images.githubusercontent.com/91855816/161438507-db38348d-0e8d-416e-b610-0f113058e278.png)

  * Vertical
  
  ![image](https://user-images.githubusercontent.com/91855816/161438581-fec14ae7-ba62-4fc0-b2fa-fa493e68a770.png)

  ### Interfaz Mesero
  * Vista donde puede elegir/eliminar/aumentar/disminuir productos a la orden
  
  ![image](https://user-images.githubusercontent.com/91855816/161438666-50e161d7-6e31-4302-923e-61b0bf946736.png)
  
  * Vista donde puede visualizar las ordenes enviadas
  
  ![image](https://user-images.githubusercontent.com/91855816/161438942-e3d793ab-aa58-407a-9840-e53b2f1b73f1.png)
  
   ### Interfaz Chef
  * Vista donde visualizar las ordenes 
  
  ![image](https://user-images.githubusercontent.com/91855816/161439027-d84c3170-5120-47a4-8bb7-bd4deead72de.png)

## 3. Historias de usuario

La organización del proyecto se llevo por sprints con martes como la fecha de la deadline.

### HU 1 Meserx y chef pueden ver las tres secciones 
Yo como usuario puedo visualizar las tres vistas de Home(Quote, Log in y About us) para posteriormente logearme a la plataforma.

Criterios de aceptación
- Hacer el prototipado para Home de manera horizontal y vertical para iPad.
- Ver la primera parte de Home, que es el lema del restaurante.
- Ver la sección de About us.
- Ver la sección de Login.

![image](https://user-images.githubusercontent.com/91855816/161446468-1e47f80b-16e6-4e39-9a05-7550660a233d.png)

### HU 2 Meserx debe logearse y filtrar el menú
Yo como meserx quiero logearme y filtrar los productos para tomar la orden de una manera más eficiente y rápida.

Criterios de aceptación

- Logearse haciendo la validación con la base de datos de users de la API.
- Se puede ver los productos ya diseñados.
- Botones que indiquen qué tipo de producto son.
- Filtrar productos usando pipes.

![image](https://user-images.githubusercontent.com/91855816/161447549-7be5e76f-4450-4b10-9f66-8780d171849a.png)

### HU 3 Mesero/a debe poder tomar pedido de cliente
Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.

Criterios de aceptación

- Anotar nombre de cliente.
- Agregar productos al pedido.
- Eliminar productos.
- Ver resumen y el total de la compra.
- Enviar pedido a cocina guardandolo en la base de datos de orders de la API.
- Se ve y funciona bien en una tablet.

![image](https://user-images.githubusercontent.com/91855816/161448990-19128b9b-627b-4c9b-ab0d-29d362638716.png)

### HU 4 Chef y meserx debe ver pedidos listos para preparar y servir
Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y marcar cuáles están listos para saber qué se debe cocinar.
Yo como meserx quiero ver los pedidos que están preparados para entregarlos rápidamente a los clientes que las hicieron.

Criterios de aceptación

- Ver los pedidos ordenados según se van haciendo.
- Marcar los pedidos que se han preparado y están listos para prepararse y servirse.
- Ver listado de pedido listos para servir.
- Marcar pedidos que han sido entregados.

![image](https://user-images.githubusercontent.com/91855816/161449413-a895ff27-3e63-4212-9a47-9c206bfd9680.png)

## 4. Vista final

  * Home
  
  ![image](https://user-images.githubusercontent.com/91855816/161461190-8e049510-c074-4a53-9dde-80da77452bd5.png) ![image](https://user-images.githubusercontent.com/91855816/161463971-7f54c7f4-70f5-4e76-b1ce-b261ef7ec28c.png) ![image](https://user-images.githubusercontent.com/91855816/161464036-40c3490b-b07f-4212-a227-e682400f612a.png)
  
  * Waiter
  
  ![image](https://user-images.githubusercontent.com/91855816/161462732-a992b276-ef59-4cca-99e4-5d2275a31ee7.png) 
  ![image](https://user-images.githubusercontent.com/91855816/161462788-105b9cf7-dd6f-4a05-80c0-8f897e7940ba.png)
  ![image](https://user-images.githubusercontent.com/91855816/161462916-51f305d0-d8b3-4089-88af-af62742a7fa0.png)

  * Chef 
  
  ![image](https://user-images.githubusercontent.com/91855816/161462323-622533f4-c6d1-44c3-8310-67ae4105a356.png) ![image](https://user-images.githubusercontent.com/91855816/161462498-d5f95593-a171-4ce6-8b4e-64f5eb62e832.png)




 

## 5. Tecnologias implementadas

![Canal oficial de](https://user-images.githubusercontent.com/91855816/161452636-ce0c6849-0d2c-4c92-91c7-15fa044ad416.png)

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

##  Objetivos de aprendizaje

HTML

- [✔️] Uso de HTML semántico

CSS

 - [✔️] Uso de selectores de CSS
 - [✔️] Modelo de caja (box model): borde, margen, padding
 - [✔️] Uso de flexbox en CSS
 - [✔️] Uso de media queries
 
JavaScript

 - [✔️] Arrays (arreglos)
 - [✔️] Objetos (key, value)
 - [✔️] Diferenciar entre tipos de datos primitivos y no primitivos
 - [✔️] Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
 - [✔️] Funciones (params, args, return)
 - [✔️] Pruebas unitarias (unit tests)
 - [✔️] Pruebas asíncronas
 - [✔️] Uso de mocks y espías
 - [✔️] Módulos de ECMAScript (ES Modules)
 - [✔️] Diferenciar entre expresiones (expressions) y sentencias (statements)
 - [✔️] Callbacks
 - [✔️] Promesas

Control de Versiones (Git y GitHub)

 - [✔️] Git: Instalación y configuración
 - [✔️] Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)
 - [✔️] Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)
 - [✔️] GitHub: Creación de cuenta y repos, configuración de llaves SSH
 - [✔️] GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)
 - [✔️] GitHub: Organización en Github (projects | issues | labels | milestones | releases)

user-centricity

 - [✔️] Diseñar un producto o servicio poniendo a la usuaria en el centro
 
product-design

 - [✔️] Crear prototipos de alta fidelidad que incluyan interacciones
 - [✔️] Seguir los principios básicos de diseño visual

research

 - [✔️] Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad

Angular

 - [✔️] Components & templates
 - [✔️] Directivas estructurales (ngIf / ngFor)
 - [✔️] Creación y uso de servicios
 - [✔️] Manejo de rutas
 - [✔️] Creación y uso Observables.
 - [✔️] Uso de HttpClient
 - [✔️] Estilos de componentes (ngStyle / ngClass)

HTTP

 - [✔️] Consulta o petición (request) y respuesta (response).
 - [✔️] Cabeceras (headers)
 - [✔️] Cuerpo (body)
 - [✔️] Verbos HTTP
 - [✔️] Codigos de status de HTTP
 - [✔️] Encodings y JSON
