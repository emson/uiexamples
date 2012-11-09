class ConferencesController < ApplicationController

  def show
    @participants = Participant.all
    conference = Conference.first
    @conference = conference.as_json
    @conference[:start] = format_date_user_friendly(conference)
  end

  def update
    @conference = Conference.find(params[:id])
    @conference.update_attributes(params[:conference])
    respond_to do |format|
      format.json {render json: @conference}
    end

  end



private

  def format_date_user_friendly(conference)
    conference.start.strftime("%A #{conference.start.day.ordinalize} %B, %H:%M%P")
  end

end
