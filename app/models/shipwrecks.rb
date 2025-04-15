class Shipwrecks
  include Mongoid::Document
  include Mongoid::Timestamps

  field :recrd,         type: String
  field :vesslterms,    type: String
  field :feature_type,  type: String
  field :chart,         type: String
  field :latdec,        type: Float
  field :londec,        type: Float
  field :gp_quality,    type: String
  field :depth,         type: Integer
  field :sounding_type, type: String
  field :history,       type: String
  field :quasou,        type: String
  field :watlev,        type: String
  field :coordinates,   type: Array

  index({ coordinates: "2d" }) # Geospatial index
end
