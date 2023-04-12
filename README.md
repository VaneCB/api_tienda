# DAW2023

Repositorio para la prueba de Aragon skills 2023

## LUGAR HORARIO COMPETICIÓN

Huesca, Palacio de Congresos, Sala Polivalente.

### 21 de marzo de 2023

De 15.00 a 16.00 horas: Acreditación participantes y tutores

De 16.00 a 17.00 horas: Comprobación de herramientas y adaptación al puesto

De 17.00 a 20.00 horas: Competición (3 horas). Módulo I: Planificación, material gráfico y diseño web (25%)

### 22 de marzo de 2023

Competición (8 horas). Módulo II: Programación (frontend y backend) y bbdd (50%)

De 9.30 a 13.30 horas

De 15.30 a 19.30 horas

### 23 de marzo de 2023

De 09.00 a 14.00 horas: Competición (5 horas). Módulo III: Tests, despliegue en servidor y control de versiones (25%)

De 17.00 a 19.00 horas: Entrega de diplomas y medallas.

## PRUEBA

Los detalles de la prueba todavía se publicarán cada día aquí.

## PASOS PREVIOS

- Utilizaremos como fuente de datos para la prueba el repositorio https://www.kaggle.com/datasets/paramaggarwal/fashion-product-images-small.
- Utilizaremos como fuente adicional de datos la API realizada mmediante un servidor express de node.js y que está situada en la carpeta _pre_ . Puedes levantar el servicio como un contenedor con los siguientes comandos:

```bash
# requerimientos equipo linux y docker instalado
cd pre
docker build -t price-api .
docker run -p 8080:8080  price-api
```

- Puedes levantarlo "a mano" mediante los siguientes comandos:

```bash
  # requerimientos: node y npm instalado en el equipo
  npm install
  npm start
```

- Obtención de precio para un producto con id 8509:

```bash
http://localhost:8080/products/15970
```

- Obtención de precio para todos los productos:

```bash
http://localhost:8080/products
```

## NORMAS GENERALES SOBRE LA COMPETICIÓN

- El uso del móvil no está permitido.
- Se puede hacer uso de Internet y de cualquier otra información que aporte el competidor para la realización de la prueba basada en apuntes/materiales/documentación, no mediante la solicitud de ayuda a través de un foro u otro canal de intercambio de información.
- No está permitida la comunicación con otros competidores u otro personal externo mediante cualquier método (móvil, chat, internet…).
- Está permitido el uso de cascos o tapones para aislar del ruido.
- El competidor puede consultar al jurado ante cualquier duda que se le plantee sobre si alguna acción está permitida o no.
- Disponéis de 20 minutos al inicio de cada módulo para la lectura de la prueba y planteamiento general de dudas
  - Si surge un problema/aclaración de la prueba durante la competición se informará por igual a todos los participantes para estar en igualdad de condiciones.
- Al final

## RECOMENDACIONES

- **Trae el portatil ya configurado** con tu editor preferido, git, etc. La organización te proporcionará una pantalla adicional.

- **Estudia bien los requerimientos de las pruebas**. Cada día se realizará y se evaluará un modulo. Al comienzo del mismo se entregarán sus instrucciones, bocetos y un checklist para su evaluación. Es conveniente leer cuidadosamente todos los items del checklist y seleccionar los más favorables. La prueba está dimensionada para que sea fácil realizar algunos items, pero no la finalización de todos ellos. En función de la arquitectura que se elija para hacer la aplicación hay items que no tiene sentido completar.

- **Realiza los pasos previos que te proporcionamos**. No esperes a hacer un trabajo previo al día del examen si puedes ya llevarlo preparado. Lleva así mismo una arquitectura tipo para tu aplicación, con las librerías que utilices, etc..

- **Ten claro el despliegue de tu aplicación en un servidor**. En el último módulo se hará el despliegue, valoración de tests, control de versiones, integración continua.... Todo lo que tengas hecho en días anteriores te ayudará.
