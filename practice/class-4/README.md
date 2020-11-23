Clase 4
=======

Para esta clase van a tener que modificar el Dockerfile de la aplicación
ubicada en la carpeta de backend para que soporte multi-stage.

El objetivo de esta modificación es optimizar la instalacion de dependencia.
Como resultado final se espera:

- Si la applicación va a ser utilizada en modo `production`, debemos evitar que las
gemas ubicadas dentro de los grupos `:development` y `:test` sean instaladas.
- Si la applicacion va a ser utilizada en modo `development`, todas las gemas
deben ser instaladas.


Extra:

- Construir el docker-compose.yml que permita buildear especificandole el
target que se desee
- Permitir que el Dockerfile reciba un `build arg`, cuyo valor por defecto sea
`production` y dependiendo el valor de dicho argumento se construya la imagen
deseada (`production` o `development`).
