class CreateMemes < ActiveRecord::Migration
  def change
    create_table :memes do |t|


      t.timestamps
    end
  end
end
