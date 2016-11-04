class ChangeColumnScheduledDayToScheduledDate < ActiveRecord::Migration[5.0]
  def change
    rename_column :tasks, :scheduled_day, :scheduled_date
  end
end
