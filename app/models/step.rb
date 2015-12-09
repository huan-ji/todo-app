class Step < ActiveRecord::Base
  validates :title, :task_id, presence: true

  belongs_to :task
end
