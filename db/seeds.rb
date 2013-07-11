# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

templates =
Template.create([
  {
    name: 'Annoyed Picard',
    file_name: 'annoyed_picard.jpg'
  },
  {
    name: 'Confession Bear',
    file_name: 'confession_bear.jpg'
  },
  {
    name: 'Good Guy Greg',
    file_name: 'good_guy_greg.jpg'
  },
  {
    name: 'One Does Simply Not',
    file_name: 'one_does_simply_not.jpg'
  },
  {
    name: 'Scum Bag Girl',
    file_name: 'scum_bag_girl.jpg'
  },
  {
    name: 'Sonny Time',
    file_name: 'sonny_time.jpg'
  }
  ])
