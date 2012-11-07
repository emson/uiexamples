module BackboneApp
  module Config

    def self.load!(path)
      environment = ENV["RACK_ENV"] || ENV["RAILS_ENV"] || 'development'
      YAML.load(ERB.new(File.new(path).read).result)[environment]
    end

    def self.config
      @config ||= load!(File.join(File.dirname(__FILE__), '..', 'config', 'config.yml'))
    end

    # If a heroku key is set then return the value
    # else get the key from the configuration file.
    # This means dev will use the config file and
    # production will use the heroku key.
    def self.config_getter(heroku_key, config_key)
      return self.config[config_key] unless ENV
      ENV[heroku_key] || self.config[config_key]
    end

  end
end

