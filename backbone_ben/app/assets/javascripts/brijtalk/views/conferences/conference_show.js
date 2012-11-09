Brijtalk.Views.ConferencesShow = Backbone.View.extend({
  template: JST['brijtalk/templates/conferences/conferences_show'],

  events: {
  },

  initialize: function() {
    Brijtalk.participants = new Brijtalk.Collections.Participants;
  },

  render: function() {
    console.log();
    this.$el.html( this.template({}) );
    // console.log(this.$el);
    return this;
  },

});
