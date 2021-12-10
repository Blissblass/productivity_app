class ToDo < ApplicationRecord
  validates :name, presence: true, length: {minimum: 5, maximum: 20}
  has_many :tasks, dependent: :destroy
end