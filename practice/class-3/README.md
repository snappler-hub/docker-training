Clase 3
=======

Objectivos de esta práctica:
- Definir un Dockerfile para la aplicación Backend.
- Usar la herramienta docker-compose para levantar el Backend junto con Redis y un Postgresql.
- Hacer uso de **volumes** para persistir los cambios hechos en la base de datos.
- Aislar el container de Redis y Postgres, haciendo uso de **Networks**.
- Hacer uso de EntryPoint para correr las migraciones.

Para levantar Postgres y Redis, usar las imagenes oficiales en Docker Hub:
- [postgres](https://hub.docker.com/_/postgres)
- [redis](https://hub.docker.com/_/redis)

Tener en cuenta las siguientes configuraciones a la hora de levantar el backend:
```erb
# config/database.yml

default: &default
  adapter:  postgresql
  encoding: unicode
  pool:     <%= ENV.fetch('RAILS_MAX_THREADS') { 5 } %>
  host:     <%= ENV.fetch('DATABASE_HOST') %>
  database: <%= ENV.fetch('DATABASE_NAME') %>
  username: <%= ENV.fetch('DATABASE_USER') %>
  password: <%= ENV.fetch('DATABASE_PASS') %>

<%= Rails.env %>:
  <<: *default
```

```ruby
# environments/development.rb o environments/production.rb

config.cache_store = :redis_cache_store, { url: ENV.fetch('REDIS_URL') }
```

```ruby
# .env.example

DATABASE_HOST=localhost
DATABASE_NAME=class_3_db
DATABASE_USER=postgres
DATABASE_PASS=root

REDIS_URL=redis://localhost:6379/1
```
