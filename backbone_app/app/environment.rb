module BackboneApp
  module Environment

    LOGGER = ::Logger.new(::BackboneApp::Config.config['logger'])

  end
end
