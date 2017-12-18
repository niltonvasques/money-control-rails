class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.string :description
      t.decimal :value
      t.references :account, foreign_key: true
      t.string :tags

      t.timestamps
    end
  end
end
