# frozen_string_literal: true

class TodosController < ApplicationController
  def index
    todos = Rails.cache.fetch(:todos) { Todo.all.as_json }

    render json: { data: todos }
  end

  def create
    todo = Todo.new(message: params[:message])

    if todo.save
      InvalidateCacheJob.perform_later(key: :todos)

      render json: { data: todo }, status: :created
    else
      render json: { errors: todo.errors }, status: :unprocessable_entity
    end
  end
end
