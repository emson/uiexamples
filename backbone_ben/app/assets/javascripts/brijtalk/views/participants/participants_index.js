Brijtalk.Views.ParticipantsIndex = Backbone.View.extend({
  tagName: 'ul',
  id: 'participants',

  initialize: function() {
    // this.collection.on('reset', this.render, this); // not needed???
  },

  render: function() {
    this.collection.each(this.addOne, this);
    return this;
  },

  addOne: function(participant) {
    var view = new Brijtalk.Views.Participant({ model: participant });
    this.$el.append(view.render().el);
  },

});
