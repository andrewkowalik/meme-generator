class TemplatesController < ApplicationController
  def index
    templates = Template.all
    render :json => templates
  end

  def show
    template = Template.find(params[:id])
    render :json => template
  end
end
