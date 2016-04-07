json.array!(@datasets) do |dataset|
  json.extract! dataset, :id, :start_time, :end_time, :address, :name, :author
  json.url dataset_url(dataset, format: :json)
end
