class ShipwrecksController < ApplicationController

	def index
    	shipwrecks = Shipwrecks.page(params[:page]).per(params[:per_page] || 10) # Default: 10 records per page
    	render json: {
      	data: shipwrecks,
      	meta: {
        current_page: shipwrecks.current_page,
        next_page: shipwrecks.next_page,
        prev_page: shipwrecks.prev_page,
        total_pages: shipwrecks.total_pages,
        total_count: shipwrecks.total_count
      }
    }
  	end


	def show 
		shipwreck = Shipwrecks.find(params[:id])
		render json: shipwreck
	rescue Mongoid::Errors::DocumentNotFound
    	render json: { error: 'Shipwreck not found' }
	end


	def create
    shipwreck = Shipwrecks.new(shipwreck_params)
    if shipwreck.save
      render json: shipwreck, status: :created
    else
      render json: shipwreck.errors, status: :unprocessable_entity
    end
  end

  def update
    shipwreck = Shipwrecks.find(params[:id])
    if shipwreck.update(shipwreck_params)
      render json: shipwreck
    else
      render json: shipwreck.errors, status: :unprocessable_entity
    end
  end

  def destroy
    shipwreck = Shipwrecks.find(params[:id])
    shipwreck.destroy
    head :no_content
  end

  private

  def shipwreck_params
    params.require(:shipwreck).permit(:recrd, :vesslterms, :feature_type, :chart, :latdec, :londec, :gp_quality, :depth, :sounding_type, :history, :quasou, :watlev, :coordinates)
  end


end
