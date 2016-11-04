class MainPagesController < ApplicationController
  before_action :set_main_page, only: [:show, :edit, :update, :destroy]

  # GET /
  def index
    @pictures = Picture.front_page_set
    @cache_buster = "?cb=#{Time.now.to_i}"
  end
  
  def history
  end
  
  def vendors
  end
  
  def contact_us
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]

    ::EmailJob::Inquiry.perform_async(@name, @email, @message)
    ::EmailJob::Autoresponse.perform_async(@name, @email, @message)
    flash[:notice] = 'Thank you for sending us a message; you should receive a confirmation email shortly.'
    redirect_to :root
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_main_page
      @main_page = MainPage.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def main_page_params
      params[:main_page]
    end
end