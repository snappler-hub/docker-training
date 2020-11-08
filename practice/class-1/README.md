Clase 1
=======

#### Docker Build

Construyendo nuestra una nueva imagen Docker:
- **`.`** nos indica a partir de donde creara la imagen.
- `-f` nos permite especificar donde esta el Dockerfile.

```bash
docker build .

docker build -f ./docker/Dockerfile .

# Falla, porque??
docker build ./docker/
```
Mas opciones [aquí](https://docs.docker.com/engine/reference/commandline/build/)

Ver imágenes creadas
```bash
docker images
```

Asignarle nombre a las imágenes
```bash
docker tag [image-ID] name:tag
```

Asignarle nombre al hacer el build
```bash
docker build --tag hello-docker:1.0 .
```

#### Docker Run

Corriendo nuestra nueva imagen. Levantamos un container:
- `--name hello` le asignamos un nombre al contenedor que estamos levantando
- `--publish 9292:9292` conectamos el puerto `9292` de la maquina al `9292` del container.
- `--detach` corre el container en background
```bash
docker run --detach --name hello --publish 9292:9292 hello-docker:1.0
```
Mas opciones [aquí](https://docs.docker.com/engine/reference/commandline/run/)

Ver contenedores corriendo:
```bash
docker ps
```

Ver metricas de los contenedores
```bash
docker stats
```

Uhhh pero yo necesito que se levante en el 80! Como lo hago?

Levantemos un Mysql
```bash
docker run mysql
```

#### Docker Exec

Entramos la container corriendo:
- `--interactive` o `-i` vincula las entrada y salida estandar con la de tu terminal, permitiendo un comportamiento interactivo.
- `--tty` o `-t` crea una terminal virtual con el contenedor.
```bash
docker exec --interactive --tty hello bash

docker exec -it hello bash
```
Mas opciones [aquí](https://docs.docker.com/engine/reference/commandline/exec/)


#### Docker run vs. Docker exec
```bash
docker run -it hello-docker:1.0 bash
```

#### Docker attach??
```bash
docker attach hello
```

#### Otros comandos básicos
```bash
docker top [container]

docker pause [container]
docker unpause [container]

docker stop [container]
docker start [container]
docker restart [container]

docker image [subcommands]
docker container [subcommand]
```
