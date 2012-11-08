# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Emanuel', :city => cities.first)


## create participants

Participant.create(:conference_id => 1, :user_id => 1, :contact_email => "test_user1@example.com", :nickname => "Test User", :msisdn => "441122334455", :state => "pending")
Participant.create(:conference_id => 1, :user_id => 1, :contact_email => "test.user2@example.com", :nickname => "Test User 2", :msisdn => "441122334466", :state => "pending")

Conference.create(name: "string", agenda: "text", start: DateTime.now, finish: DateTime.now, status: 2, conference_number: "441122334477", conference_call_id: "b2387bi3ub9bf")