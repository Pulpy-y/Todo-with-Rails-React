class TodoList < ApplicationRecord
  has_many :todo_items
  accepts_nested_attributes_for :todo_items

  validates :title, presence: true
  validates :description, presence: true
end
