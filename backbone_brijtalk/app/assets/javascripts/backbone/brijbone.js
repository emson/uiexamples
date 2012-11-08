$(document).ready(function(){

//Create a model - participant
var Participant = Backbone.Model.extend({});
participant = new Participant({});

//Create a model - conference from the dom data.
var Conference = Backbone.Model.extend({});
conference = new Conference($('#participant_collection').data('conference') );

// create a view for the model participant
var ParticipantView = Backbone.View.extend({

  // using a li instead of default div.
  tagName: 'li',

  template: JST['backbone/templates/participant_list'],

  render: function(){
    var attributes = this.model.toJSON();
    this.$el.toggleClass("vcard status-" + attributes['state']);
    this.$el.html(this.template(attributes));
    return this;
  }
});


// create a view for the model Conference
var ConferenceView = Backbone.View.extend({

  template: JST['backbone/templates/conference_view'],

  render: function(){
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
    return this;
  }
});


// create a collection - Participant
var ParticipantsCollection = Backbone.Collection.extend({});


//get a collection for participants from a dom data element
var conferenceParticipants = new ParticipantsCollection;
conferenceParticipants.reset( $('#participant_collection').data('participants') );



// rendering to view for a collection..
var ConferenceParticipantView = Backbone.View.extend({
  tagName: 'ul',
  id: 'participants',

  addOne: function(participant){
  var participantview = new ParticipantView({model: participant});
  this.$el.append(participantview.render().el);
  },

  render: function(){ 
    this.collection.forEach(this.addOne, this);
  }

});

//create a new collection for participants in conference
var conferenceParticipantView = new ConferenceParticipantView({collection: conferenceParticipants});

//create a new view for conference
var conferenceview = new ConferenceView({model: conference});

// render the conference view
conferenceview.render();

//log the conference view
console.log(conferenceview.el)

// append or replace to the dom element
$('#conf-info').replaceWith(conferenceview.el)

// render the particpants view
conferenceParticipantView.render();

// Replace div content with participant collection view.
$('div#content').replaceWith(conferenceParticipantView.el)

});