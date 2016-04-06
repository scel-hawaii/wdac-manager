json.array!(@nodes) do |node|
  json.extract! node, :id, :address, :description, :design, :name
  json.url node_url(node, format: :json)
end
