class Conference < ActiveRecord::Base
  attr_accessible :name, :agenda, :start, :finish, :status, :conference_number, :conference_call_id 
end
