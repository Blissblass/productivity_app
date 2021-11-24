class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.text :description
      t.integer :parent_id
      t.integer :order 

      t.timestamps
    end
  end
end
