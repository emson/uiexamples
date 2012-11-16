BrijtalkWeb.Models.Participant = function(json_data){
  var my = {};

  initialize = function(json_data){
    my.state = json_data["status"];
    my.msisdn = json_data["msisdn"];

  };
  
  initialize(json_data);
  return my;
};