class AddIndexToTasks < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :index, :integer, default: 0
  end
end
