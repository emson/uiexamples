Brijtalk.Routers.ConferenceApp = Backbone.Router.extend({

  routes: {
    '': 'show'
  },

  initialize: function() {
    this.model = new Brijtalk.Models.Conference( $('#page_data').data('conference') );
    this.collection = new Brijtalk.Collections.Participants;
    this.collection.reset( $('#page_data').data('participants') );
  },

  show: function() {
    var conference_info_view = new Brijtalk.Views.ConferenceInfo({ model: this.model });
    var participants_index_view = new Brijtalk.Views.ParticipantsIndex({ collection: this.collection });
    console.log(conference_info_view.render().el);
    $('#conf-info').replaceWith(conference_info_view.render().el);
    $('#participants').replaceWith(participants_index_view.render().el);
  },

});
