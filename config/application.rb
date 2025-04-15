require_relative "boot"

require "rails/all"
require "dotenv-rails"

Dotenv.load

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SampleGeospatial
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 8.0

    # Autoload lib, but ignore non-ruby subdirectories
    config.autoload_lib(ignore: %w[assets tasks])

    # Middleware for CORS
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins "*"
        resource "*", headers: :any, methods: [:get, :post, :options]
      end
    end

    # Additional configuration can go here
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
