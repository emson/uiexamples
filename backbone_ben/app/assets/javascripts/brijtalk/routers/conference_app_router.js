Brijtalk.Routers.ConferenceApp = Backbone.Router.extend({

  routes: {
    '': 'show'
  },

  initialize: function() {
    this.collection = new Brijtalk.Collections.Participants;
    this.collection.reset( $('#participant_collection').data('participants') );
  },

  show: function() {
    console.log(this.collection);
    var view = new Brijtalk.Views.ConferencesShow({ collection: this.collection });
    console.log(view);
    $('#participant_collection').html(view.render().el);
  },

});
