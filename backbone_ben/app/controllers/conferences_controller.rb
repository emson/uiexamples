class ConferencesController < ApplicationController

  def show
    @participants = Participant.all
  end

end
