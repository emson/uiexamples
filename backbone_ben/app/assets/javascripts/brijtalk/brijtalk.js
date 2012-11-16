window.Brijtalk = {
  Initializers: {},
  Helpers: {},
  Views: {},
  Models: {},
  Collections: {},
  Routers: {},
  init: function() {
    Brijtalk.App = new Brijtalk.Routers.ConferenceApp;
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Brijtalk.init();
});
