class CreateAccounts < ActiveRecord::Migration[5.1]
  def change
    create_table :accounts do |t|
      t.string :description
      t.decimal :initial_balance
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
