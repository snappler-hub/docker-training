Docker
======

Construyendo nuestra una nueva imagen Docker:
- ¿¿`--tag`?? Nos permite darle un nombre como tambien tagear versiones de la misma.
- **`.`** nos indica donde esta ubicado el Dockerfile con el cual construira la imagen.

```bash
docker build --tag hello-docker:1.0 .
```
Mas opciones [aquí]()

Corriendo nuestra nueva imagen. Levantamos un container:
- `--name hello` le asignamos un nombre al contenedor que estamos levantando
- `--publish 9292:9292` conectamos el puerto `9292` del container al `9292` de la máquina
```bash
docker run --name hello --publish 9292:9292 hello-docker:1.0
```
Mas opciones [aquí]()

Entramos la container corriendo:
- `--interactive` conecta de afuera para adentro.
- `--tty` conecta de adentro para afuera.
```bash
docker exec --interactive --tty hello bash
```
Mas opciones [aquí]()
