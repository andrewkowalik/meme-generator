class TemplatesController < ApplicationController
  def index
    templates = Template.all

    render :json => templates
  end
end
