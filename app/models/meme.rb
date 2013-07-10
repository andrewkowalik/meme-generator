class Meme < ActiveRecord::Base
  attr_accessible :meme

  has_attached_file :meme, style: {
    thumb: '100x100>'
  }
end
