class Picture < ActiveRecord::Base
  belongs_to :user
  
  mount_uploader :image, ImageUploader
  
  def self.front_page_set
    Picture.limit(8).order("RAND()")
  end
  
  def initialize
    super
    @year ||= Time.now.year
  end
end
