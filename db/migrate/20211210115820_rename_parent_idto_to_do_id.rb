class RenameParentIdtoToDoId < ActiveRecord::Migration[6.1]
  def change
    rename_column :tasks, :parent_id, :to_do_id
  end
end
