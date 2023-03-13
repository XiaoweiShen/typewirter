class DrinksController < ApplicationController
  def index
    @drinks = Drink.all.limit(20)
  
    render json: @drinks.as_json(except: [:instruction,:created_at,:updated_at])
  #   @drinks = Drink.limit(20).pluck(:id, :name,:image,:tags).map{|i,n,img,t|{id:i,name:n,image:img,tags:t}} 
  #  # #render json: @drinks
  #   respond_to do |format|
  #       format.html # Render the HTML template
  #       format.json { render json: @drinks } # 'index.json.jbuilder' Render the JSON template
    # end
  end

  def show
   @drink = Drink.find(params[:id])
   respond_to do |format|
    format.html # Render the HTML template
    format.json { render 'show.json.jbuilder' } # Render the JSON template
  end
end
end
