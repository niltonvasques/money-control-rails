json.extract! account, :id, :description, :initial_balance, :user_id, :created_at, :updated_at
json.url account_url(account, format: :json)
