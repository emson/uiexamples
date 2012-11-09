Brijtalk.Views.Participant= Backbone.View.extend({
  tagName: 'li',
  template: JST['brijtalk/templates/participants/participant'],

  events: {
   'click' : 'clickAction'
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
  
  clickAction: function(e) {
    console.log(e);
    target = e.currentTarget;
    console.log(target);
    bonsai.run(target, {
      code: function() {
        new Rect(10,10,100,100)
          .addTo(stage)
          .attr('fillColor', 'green');
      },
      width: 500,
      height: 400,
    });
  },

});
