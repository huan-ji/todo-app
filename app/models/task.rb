class Task < ActiveRecord::Base
  validates :title, :body, presence: true
  has_many :tasks
end
