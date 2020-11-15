# frozen_string_literal: true

class ApplicationController < ActionController::API
  def health_check
    render plain: 'success', status: :ok
  end
end
