class MemesController < ApplicationController
  def index
    @meme = Meme.new
  end

  def create
    split_image = view_context.splitBase64(params[:temp])
    decoded_image = Base64.decode64(split_image[:data])


    image = StringIO.new(decoded_image)
    image.class_eval do
      attr_accessor :content_type, :original_filename
    end

    image.content_type = 'image/jpeg'
    image.original_filename = File.basename('memeTown.jpeg')

    @meme = Meme.new()
    @meme.meme = image

    if @meme.save
      @meme = JSON::parse(@meme.to_json).merge({url: @meme.meme.url})
      render :json => @meme
    end
  end

  def show
    @meme = Meme.find(params[:id])
    @meme = JSON::parse(@meme.to_json).merge({url: @meme.meme.url})

    render :json => @meme
  end
end
