Brijtalk.Views.Participant= Backbone.View.extend({
  tagName: 'li',
  template: JST['brijtalk/templates/participants/participant'],

  events: {
   'hover' : 'hoverAction',
   'click' : 'clickAction',
  },

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function() {
    var attributes = this.model.toJSON();
    this.$el.removeAttr('id').attr('id', attributes['msisdn']); // TODO format msisdn
    this.$el.toggleClass("vcard status-" + attributes['state']);
    this.$el.html(this.template( attributes ));
    return this;
  },
  
  hoverAction: function(e) {
    if ($(e.currentTarget).find('#info').is(":hidden")) {
      $(e.currentTarget).find('#info').slideDown('slow');
    }else {
      $(e.currentTarget).find('#info').slideUp('slow');
    }
  },

  clickAction: function(e) {
    this.$el.find(".card").toggleClass("rotate onBack");
  }

});
