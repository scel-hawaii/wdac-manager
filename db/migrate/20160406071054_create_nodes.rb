class CreateNodes < ActiveRecord::Migration
  def change
    create_table :nodes do |t|
      t.integer :address
      t.text :description
      t.string :design
      t.string :name

      t.timestamps null: false
    end
  end
end
