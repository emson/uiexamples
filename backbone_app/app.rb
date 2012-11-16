require './app/backbone_app'

class App < Sinatra::Base
  set :sessions, false
  set :views, settings.root + '/app/views'

  # setup and configure the sprocket assets pipeline
  set :assets, Sprockets::Environment.new
  settings.assets.append_path('vendor/assets/javascripts')
  settings.assets.append_path('app/assets/javascripts')
  settings.assets.append_path('app/assets/stylesheets')

  get '/' do
    erb :index
  end

  get '/assets/stylesheets/:file.css' do
    content_type 'text/css'
    settings.assets["#{params[:file]}.css"]
  end

  get '/assets/stylesheets/fonts/:file' do
    # content_type 'text/css'
    settings.assets["#{params[:file]}"]
  end

  get '/assets/javascripts/:file.js' do
    content_type 'application/javascript'
    settings.assets["#{params[:file]}.js"]
  end

  get '/conferences/:id' do
    erb :conference
  end

  use BackboneApp::Controllers::BackboneAppController

end
