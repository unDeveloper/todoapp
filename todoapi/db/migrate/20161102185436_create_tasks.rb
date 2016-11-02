class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.integer :status
      t.text :location
      t.references :user, foreign_key: true
      t.date :scheduled_day
      t.time :scheduled_hour

      t.timestamps
    end
  end
end
