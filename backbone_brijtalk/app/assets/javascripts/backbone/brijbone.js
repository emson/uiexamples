$(document).ready(function(){

//Create a model - participant
var Participant = Backbone.Model.extend({});
participant = new Participant({});

//Create a model - conference from the dom data.
var Conference = Backbone.Model.extend({
  // will need to add url here soon to post data to the model
});

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


// create a view for the model Conference and add extra functions to edit certain fields.
var ConferenceView = Backbone.View.extend({

  template: JST['backbone/templates/conference_view'],

  // add events to the view on click..
  events: {
    "click .editable": "onEditable",
    "keypress .edit": "editValue",
  },

  //this gets the current element and changes the html to allow input text.
  onEditable: function(e){
    var currentElement = $(e.srcElement);
    $(currentElement).html("<input class='edit' value='"+ currentElement.text() +"'></input>");
  },

  //this will exit out of the input field (soon.....)
  editValue: function(e){
    var keyCode = e.keyCode;    
    // this magically keeps the model data ... ere be dragons!
    if(keyCode === 13){
      newValue = ($('.edit').val());
      this.model.set('name', newValue);
      this.model.url = '/conferences/1';
      console.log(this.model);
      // this puts a request to the model
      this.model.save();

      //exit the edit box
      this.exitEdit();
    }
  },

 // this exits the text box and replaces the value with the correct string ...
  exitEdit: function(e){
    text = $('.edit').val();
    $('.edit').replaceWith(text);
  },

  render: function(){
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
    return this;
  },
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
// console.log(conferenceview.el)

// append or replace to the dom element
$('#conf-info').replaceWith(conferenceview.el)

// render the particpants view
conferenceParticipantView.render();

// Replace div content with participant collection view.
$('div#content').replaceWith(conferenceParticipantView.el)

});