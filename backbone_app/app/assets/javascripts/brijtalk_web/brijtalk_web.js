// Arrange page specific javascript
// http://stackoverflow.com/questions/3437585/best-way-to-add-page-specific-javascript-in-a-rails-3-app
window.BrijtalkWeb = {
  Initializers: {},
  Helpers: {},
  Views: {},
  Models: {},
  init: function() {
		BrijtalkWeb.Initializers();
    BrijtalkWeb.pushEvents = new BrijtalkWeb.Helpers.PushEvents(BrijtalkWeb.Helpers.NotificationHelper.notification);
    BrijtalkWeb.pushEvents.listen_on($('#participant_collection').data('conference-call-id'), "call_event");
  }
};

$(document).ready(function(){
  BrijtalkWeb.init();
});
