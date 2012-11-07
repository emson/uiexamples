
$LOAD_PATH << File.join(File.dirname(__FILE__))
require './app'

use Rack::Deflater

run App

# map '/assets' do
#   @environment = Sprockets::Environment.new
#   @environment.append_path( './app/assets/javascripts' )
#   @environment.append_path( './app/assets/stylesheets' )
#   run @environment
# end

