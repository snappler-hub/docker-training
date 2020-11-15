# frozen_string_literal: true

class InvalidateCacheJob < ApplicationJob
  queue_as :primary

  def perform(key)
    puts 'Hello'

    Rails.cache.delete(key)
  end
end
