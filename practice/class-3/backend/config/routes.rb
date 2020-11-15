# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api do
    get 'health_check', to: 'application#health_check'

    resources :todos, only: [:index, :create]
  end
end
