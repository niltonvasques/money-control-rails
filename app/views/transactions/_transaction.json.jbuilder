json.extract! transaction, :id, :description, :value, :account_id, :tags, :created_at, :updated_at
json.url transaction_url(transaction, format: :json)
