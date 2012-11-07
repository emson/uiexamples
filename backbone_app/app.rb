require './app/backbone_app'

class App < Sinatra::Base
  set :sessions, false
  set :views, settings.root + '/app/views'


  get '/' do
    "Welcome to the Backbone example"
  end

  use BackboneApp::Controllers::BackboneAppController

end
