Brijtalk.Views.ConferencesShow = Backbone.View.extend({
  templates: JST['conferences/conferences_show'],

  events: {
  },

  initialize: function() {
    Brijtalk.participats = new Brijtalk.Collections.Participants;
  },

  render: function() {
  },

});
