class Participant < ActiveRecord::Base
  attr_accessible :nickname, :msisdn, :user_id, :contact_email, :conference_id, :state
end
