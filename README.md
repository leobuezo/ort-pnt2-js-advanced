# ort-pnt2-js-advanced
Ejemplos y ejercicios de asincronismo con JavaScript

## Importante: instalar nodejs y npm
Para qué nos sirve? Para poder ejecutar desde la terminal todos los archivos que querramos correr, mediante node nombreArchivo.js
A continuación detallo cómo hacerlo en terminal bash linux. Antes de proceder con la instalación de nodejs y npm recuerden actualizar los packages y dependencies:
1. sudo apt update
2. sudo apt upgrade

Ahora sí, procedamos:
1. sudo apt install -y nodejs
2. sudo apt install -y build-essential
3. sudo apt install npm

Si lo desean, pueden instalar nvm (Node Version Manager) para gestionar las versiones de nodejs.

------------------------------------------------------------------------------------------------

## Clase 2 - ECMA Script

* ECMAScript vs Javascript
* ¿Qué soportan la mayoría de los entornos?
* Transpilers (Babel, Typescipt, CoffeeScript, etc.)
* ¿Qué sintaxis debería usar?

### Closures
Funciones declaradas dentro del ámbito léxico.
Tienen acceso a variables declaradas en la función padre.
Es posible gracias al sistema de ámbitos de JS.
[Mas info aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)

### Funciones de primer nivel o primer orden o alto orden
Pueden ser tratadas como variables.
Permiten la creación de funciones de alto nivel tomando una o más funciones y devuelven estas también. Ej: map()
Son la base para la creación y gestión del ciclo de vida de componentes.

### Asincronicidad
Javascript es un lenguaje sincronizado, ejecutado en un solo hilo.
Una función que toma mucho tiempo correr va a causar problemas de performance y eventualmente congelar la página.
Javascript tiene funciones que actúan de forma asíncrona.

Se puede dar en :
- ejecución en pilas 
- browser APIs
- función de encolado: function queue
- ciclo de eventos

### Ejemplo de funciones asíncronas:
setTimeout()
XMLHttpRequest(), jQuery.ajax(), fetch()
llamadas a bases de datos (persistencia local)

### Stack Overflow y recursividad
Hay que tener cuidado con esto y la gestión de eventos.

### Callbacks
Flujo de control con llamadas asíncronas.
Ejecuta la función una vez la llamada asíncrona retorna un valor.

### Promesas
Solución al problema de callbacks.
Te permite escribir un código que asume que un valor es retornado dentro de una función completada.
Solo necesita un solo manejador de errores.

