class AddAttachmentsToMemes < ActiveRecord::Migration
  def change
    add_attachment :memes, :meme
  end
end
