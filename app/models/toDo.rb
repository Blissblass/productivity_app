class ToDo < ApplicationRecord
  validates :name, presence: true, length: {minimum: 5}
  has_many :tasks, dependent: :destroy
end