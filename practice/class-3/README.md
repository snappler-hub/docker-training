Clase 3
=======

Objectivos de esta práctica:
- Definir un Dockerfile para la aplicación Backend.
- Usar la herramienta docker-compose para levantar el Backend junto con Redis y un Postgresql.
- Hacer uso de **volumes** para persistir los cambios hechos en la base de datos.
- Aislar el container de Redis y Postgres, haciendo uso de **networks**.
- Hacer uso de EntryPoint para correr las migraciones.

Para levantar Postgres y Redis, usar las imagenes oficiales en Docker Hub:
- [postgres](https://hub.docker.com/_/postgres)
- [redis](https://hub.docker.com/_/redis)
> :exclamation: Leer la documentación de cada **image** para su correcta configuración

##### Sobre la aplicacion backend

Se trata de una API en rails que cuenta con tres endpoint:
- `GET /api/health_check`: return 200, para validar que el servicio esta corriendo.
- `GET /api/todos`: retorna un arreglo de **Todo**
- `POST /api/todos`: permite crear un nuevo **Todo**

Se utiliza Redis para cachear el listado de **Todo**, en el `TodosController#index` y se invalida
la cache al crear un nuevo **Todo** en `TodosController#create`

```ruby
# app/controllers/todos_controller.rb

class TodosController < ApplicationController
  def index
    todos = Rails.cache.fetch(:todos) { Todo.all.as_json }

    render json: { data: todos }
  end

  def create
    todo = Todo.new(message: params[:message])

    if todo.save
      Rails.cache.delete(:todos)

      render json: { data: todo }, status: :created
    else
      render json: { errors: todo.errors }, status: :unprocessable_entity
    end
  end
end

```

Tener en cuenta las siguientes configuraciones a la hora de levantar el backend
```yml
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

```env
# Environment que necesita la aplicación.

DATABASE_HOST=localhost
DATABASE_NAME=class_3_db
DATABASE_USER=postgres
DATABASE_PASS=root

REDIS_URL=redis://localhost:6379/1
```
