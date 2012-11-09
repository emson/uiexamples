# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Emanuel', :city => cities.first)


## create participants

Participant.create(:conference_id => 3, :user_id => 1, :contact_email => "karl.turner5@gmail.com", :nickname => "Karl Turner", :msisdn => "447715202085", :state => "pending")
Participant.create(:conference_id => 3, :user_id => 2, :contact_email => "mail@emson.co.uk", :nickname => "Ben Emson", :msisdn => "447730532404", :state => "pending")

Conference.create(name: "string", agenda: "text", start: DateTime.now, finish: DateTime.now, status: 2, conference_number: "441122334477", conference_call_id: "b2387bi3ub9bf")

