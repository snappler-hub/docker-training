Clase 2
=======

Creamos una nueva image para estos ejemplos:

```
docker build --tag my-image .
```

#### Mounts

Crear un bind mount

```
docker run -v $PWD/data:/app/data -p 9292:9292 my-image

# Un ejemplo para persistir la data de mysql
docker run -v $HOME/volumes/mysql:/var/lib/mysql -p 3306:3306 --env MYSQL_ROOT_PASSWORD=root mysql
```

```
docker volume create data

docker run -v data:/app/data
```

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

Levantando un container en la network **none**
```
docker run -d --name container-3 --network none my-image
docker network inspect none
```

Crear una nueva network
```
docker network create net-1

docker network ls
docker network inspect net-1
```

Levantar un container en nuestra nueva network:
```
docker run -d --name container-4 --network net-1 my-image

docker container inspect container-4
docker network inspect net-1
```

Un container puede estar conectado a mas de una network:
```
docker network create net-2

docker network connect net-2 container-4

docker container inspect container-4
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
