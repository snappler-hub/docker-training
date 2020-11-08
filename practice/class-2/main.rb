# frozen_string_literal: true

require 'sinatra'

class Main < Sinatra::Base
  get '/' do
    'Hola Clase 2!'
  end
end
