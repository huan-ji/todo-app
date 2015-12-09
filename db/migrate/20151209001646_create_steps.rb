class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.boolean :done, null: false, default: false
      t.integer :task_id, null: false

      t.timestamps null: false
    end
    add_index :steps, :task_id
  end
end
