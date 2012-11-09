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
    // bonsai animation
    bonsai.run(target, {
      code: function() {
        // new Rect(0,-60,100,100)
        new Bitmap("http://robohash.org/447715202085.jpg?size=150x170&bgset=bg2").on('load', function() {
          this.addTo(stage);
        }).animate('1s', {x:10, y:10}, {easing: 'bounceIn', delay: '100ms'});
      },
    });
  },

});
