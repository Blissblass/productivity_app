class RemoveOrderFromTasks < ActiveRecord::Migration[6.1]
  def change
    remove_column :tasks, :order
  end
end
