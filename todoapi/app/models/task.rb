class Task < ApplicationRecord
  belongs_to :user

  alias_attribute :scheduled_day, :scheduled_date
end
