Brijtalk.Routers.ConferenceApp = Backbone.Router.extend({

  routes: {
    '': 'show'
  },

  initialize: function() {
    this.collection = new Brijtalk.Collections.Participants;
    this.collection.reset( $('#participant_collection').data('participants') );
  },

  show: function() {
    var view = new Brijtalk.Views.ParticipantsIndex({ collection: this.collection });
    $('#participants').replaceWith(view.render().el);
  },

});
