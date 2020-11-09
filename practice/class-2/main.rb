# frozen_string_literal: true

require 'sinatra'

class Main < Sinatra::Base
  get '/' do
    File.read('./data/response.txt')
  end
end
