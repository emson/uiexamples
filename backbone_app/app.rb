require './app/backbone_app'

class App < Sinatra::Base
  set :sessions, false
  set :views, settings.root + '/app/views'

  # setup and configure the sprocket assets pipeline
  set :assets, Sprockets::Environment.new
  settings.assets.append_path('app/assets/javascripts')
  settings.assets.append_path('app/assets/stylesheets')

  get '/' do
    erb :index
  end

  get '/stylesheets/:file.css' do
    content_type 'text/css'
    settings.assets["#{params[:file]}.css"]
  end

  get '/javascripts/:file.js' do
    content_type 'application/javascript'
    settings.assets["#{params[:file]}.js"]
  end

  use BackboneApp::Controllers::BackboneAppController

end
