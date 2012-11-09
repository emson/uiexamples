class ConferencesController < ApplicationController

  def show
    @participants = Participant.all
    conference = Conference.first
    @conference = conference.as_json
    @conference[:start] = format_date_user_friendly(conference)
  end



private

  def format_date_user_friendly(conference)
    conference.start.strftime("%A #{conference.start.day.ordinalize} %B, %H:%M%P")
  end

end
