# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


def seed_nodes
  nodes = [
    {
      address: 151,
      design: 'Apple'
    },
    {
      address: 888,
      design: 'Dragonfruit'
    },
    {
      address: 889,
      design: 'Cranberry'
    }
    ]
  Node.create(nodes)
end

seed_nodes
