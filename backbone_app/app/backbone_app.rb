require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)
require 'sinatra'
require 'json'
require 'logger'
require 'pusher'

if development?
  require "sinatra/reloader"
end

require File.join(File.dirname(__FILE__), "config")
require File.join(File.dirname(__FILE__), "environment")

# require all the files in the folders,
# you may want to specify each require indvidually.
Dir[File.join(File.dirname(__FILE__), "**/*.rb")].each do |file|
  require file
end

# Initialise Pusher
# Pusher.app_id ||= ::BrijTalk::Environment::PUSHER_APP_ID
# Pusher.key    ||= ::BrijTalk::Environment::PUSHER_KEY
# Pusher.secret ||= ::BrijTalk::Environment::PUSHER_SECRET


