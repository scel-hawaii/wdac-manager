class AddDescriptionToDatasets < ActiveRecord::Migration
  def change
    add_column :datasets, :description, :text
  end
end
