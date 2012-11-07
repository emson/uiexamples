
$LOAD_PATH << File.join(File.dirname(__FILE__))
require './app'

use Rack::Deflater

run App

