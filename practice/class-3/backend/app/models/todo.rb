# frozen_string_literal: true

class Todo < ApplicationRecord
  validates :message, presence: true
end
