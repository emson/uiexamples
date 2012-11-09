Brijtalk.Views.ConferenceInfo = Backbone.View.extend({
  template: JST['brijtalk/templates/conferences/conference_info'],
  tagName: 'section',
  id: 'conf-info',

  events: {
    "click .editable": "onEditable",
    "keypress .edit": "editValue",
  },

  //this gets the current element and changes the html to allow input text.
  onEditable: function(e){
    var currentElement = $(e.srcElement);
    // add if statement to check for datepicker.
    if (e.srcElement.id === "conference_date"){
      $(currentElement).html("<input class='edit' id='datepicker' value='"+ currentElement.text() +"'></input>");
      // adding datepicker
      $( "#datepicker" ).datepicker({ dateFormat: 'DD dd MM yy,' });
    } else {
      $(currentElement).html("<input class='edit' id='"+ e.srcElement.id +"' value='"+ currentElement.text() +"'></input>");
    }
  },

  //this will exit out of the input field and set the correct value.
  editValue: function(e){
    // grab the correct key code (enter in this case)
    var keyCode = e.keyCode;    
    // this magically keeps the model data ... ere be dragons!
    if(keyCode === 13){
      newValue = ($('.edit').val());

      // adding an if statement here to grab the correct element.
      if(e.srcElement.id == "conference_name"){
        // sets the model name.
        this.model.set('name', newValue);
      }else if(e.srcElement.id == "datepicker") {
        // sets the model agenda.
        this.model.set('start', newValue);
      }else if(e.srcElement.id == "conference_agenda") {
        // sets the model agenda.
        this.model.set('agenda', newValue);
      }

      //puts to rails server with correct id.
      this.model.url = '/conferences/' + this.model.id;

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


  initialize: function() {
  },

  render: function() {
    var attributes = this.model.toJSON();
    this.$el.toggleClass("call-" + attributes['status']);
    this.$el.html(this.template( attributes ));
    return this;
  },

});
