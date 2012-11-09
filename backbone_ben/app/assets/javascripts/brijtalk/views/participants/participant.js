Brijtalk.Views.Participant= Backbone.View.extend({
  tagName: 'li',
  template: JST['brijtalk/templates/participants/participant'],

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function() {
    var attributes = this.model.toJSON();
    this.$el.toggleClass("vcard status-" + attributes['state']);
    this.$el.html(this.template( attributes ));
    return this;
  },

});
