class ConferencesController < ApplicationController

  def show
    @participants = Participant.all
    @conference = Conference.first
  end

end
