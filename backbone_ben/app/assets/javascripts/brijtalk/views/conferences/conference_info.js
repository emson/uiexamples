Brijtalk.Views.ConferenceInfo = Backbone.View.extend({
  template: JST['brijtalk/templates/conferences/conference_info'],
  tagName: 'section',
  id: 'conf-info',

  events: {
  },

  initialize: function() {
  },

  render: function() {
    var attributes = this.model.toJSON();
    this.$el.toggleClass("call-" + attributes['status']);
    this.$el.html(this.template( attributes ));
    return this;
  },

});
