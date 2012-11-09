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
    // bonsai animation
    bonsai.run(this.el, {
      code: function() {
        new Bitmap("http://robohash.org/447715202085.jpg?size=150x170&bgset=bg2").on('load', function() {
          this.addTo(stage);
        }).animate('1s', {x:10, y:10}, {easing: 'bounceIn', delay: '100ms'});
      },
    width: 500,
    height: 300
    });
    return this;
  },
  
  clickAction: function(e) {
    console.log(e);
    target = e.currentTarget;
  },

});
