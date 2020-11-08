Clase 2
=======

#### Volumes

#### Networks

Ver networks por defaults:

```
docker network ls

NETWORK ID          NAME                       DRIVER              SCOPE
32d8bafc59ad        bridge                     bridge              local
39fcb5aa79ae        host                       host                local
ea6b5c1df96c        none                       null                local
```

Inspeccionar una network:
```
docker network inspect bridge
docker network inspect host
docker network inspect none
```

Levantando un container en la network por default (bridge)
```
docker build --tag my-image .
docker run -d --name container-1 my-image

docker container inspect container-1
```

```
docker rm -f container-1

docker run -d --name container-1 --publish 9292:9292 my-image
```

Levantando un container en la network **host**
```
docker run -d --name container-2 --network host my-image
docker network inspect host
```

Crear una nueva network
```
docker network create net-1

docker network ls
docker network inspect net-1
```

Levantar un container en nuestra nueva network:
```
docker run -d --name container-3 --network net-1 my-image

docker container inspect container-3
docker network inspect net-1
```

Un container puede estar conectado a mas de una network:
```
docker network create net-2

docker network connect net-2 container-3

docker container inspect container-3
docker network inspect net-1
docker network inspect net-2
```

Tarea para casa:
Levantar nuevos containers en las distintas network y jugar con comandos:
```
ip a
dig
curl
```
