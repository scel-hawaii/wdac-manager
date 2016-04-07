class CreateDatasets < ActiveRecord::Migration
  def change
    create_table :datasets do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.integer :address
      t.string :name
      t.string :author

      t.timestamps null: false
    end
  end
end
