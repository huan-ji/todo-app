class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.boolean :done, null: false, default: false

      t.timestamps null: false
    end
    add_index :tasks, :title
  end
end
