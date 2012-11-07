
BrijtalkWeb.Views.Participant = (function() {
  var my = {};

  my.updateParticipant = function(json_data) {
    var msisdn = BrijtalkWeb.Helpers.UtilsHelper.format_msisdn(json_data.msisdn);
    var msisdn_state = json_data['status']
    participant = BrijtalkWeb.Models.Participant(json_data);
    participant_name = $('ul#participants > li#' + msisdn + ' > figure > figcaption .nickname').text();

    var mytemplate = JST['brijtalk_web/templates/model/participants/participant'](participant, participant_name);
    $('ul#participants > li#' + msisdn).remove();
    $('ul#participants').append(mytemplate);

  };

  my.appendParticipant = function(json_data) {
    var msisdn = BrijtalkWeb.Helpers.UtilsHelper.format_msisdn(json_data.msisdn);
    var msisdn_state = json_data['status']
    participant = BrijtalkWeb.Models.Participant(json_data);
    participant_name = "0" + msisdn;

    var mytemplate = JST['brijtalk_web/templates/model/participants/participant'](participant);
    $('ul#participants').append(mytemplate);
  };

  return my;
})();
