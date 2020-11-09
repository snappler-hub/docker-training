# frozen_string_literal: true

require 'sinatra'

class Main < Sinatra::Base
  get '/' do
    File.read('./data/response.txt')
  end

  get '/write' do
    File.write('./data/response.txt', (params[:text] || 'Hello Clase 2').to_s)

    'File write'
  end
end
