// BrijTalk Helpers module
BrijtalkWeb.Helpers.NotificationHelper = (function() {
  var my = {};
  var participantHash = {};
  var util = {};

  // callback function for handling push events
  my.notification = function(json_data) {
    util = BrijtalkWeb.Helpers.UtilsHelper;
    apply_participant_events(json_data);
    apply_conference_events();
  };

  // private methods

  // set the conference as 'oncall' or 'completed', etc.
  apply_conference_events = function() {
    // var conference_status = BrijtalkWeb.conference.get('status');
    // if( conference_status === 1 ) {
    //   BrijtalkWeb.conference.set({ 'status': 2 }); // oncall
    // }
    // if( conference_status === 2 ) {
    //   // find all 'oncall' participants
    //   var active_participants = BrijtalkWeb.participants.where({ 'status': 1 });
    //   // if there are none set the conference as completed
    //   if( active_participants.length === 0 ) {
    //     BrijtalkWeb.conference.set({ 'status': 3 }); // completed
    //   }
    // }
  };

  apply_participant_events = function(json_data) {
    $.each($('div#participant_collection').data('participants'),
        function(){participantHash[util.format_msisdn(this.msisdn)] = this.state;});
    update_participants(participantHash, json_data);
  };

  update_participants = function(participantHash, json_data) {
    var msisdn = util.format_msisdn(json_data['msisdn']);
    var msisdn_state = json_data['status']

    if (participantHash.hasOwnProperty(msisdn)) {
      BrijtalkWeb.Views.Participant.updateParticipant(json_data);

    } else {
      BrijtalkWeb.Views.Participant.appendParticipant(json_data);
      participantHash[msisdn] = msisdn_state;
    }
  };

  // returns a list of valid objects
  valid_objects = function(list) {
    return _.map( list, function(item) {
      if( BrijtalkWeb.Helpers.isValid(item) ) {
        return item;
      }
    });
  };

  return my;
})(); // automatically run this module

