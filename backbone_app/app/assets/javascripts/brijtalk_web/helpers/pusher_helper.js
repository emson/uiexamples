// BrijTalk PushEvents module
// { "msisdn":"07961153585", "status":"1" }
BrijtalkWeb.Helpers.PushEvents = (function(notification_callback) {
  var my = {};
  // dummy pusher, stops errors if pusher is offline
  var dummy = { subscribe: function() {
    return {bind: function() { 'dummy.subscribe.bind'; }}
  }};

  my.initialize = function initialize() {
    try {
      my.pusher = new Pusher('e0975239352875d2aa48');
    } catch(e) {
      my.pusher = dummy;
    }
  };

  // need to memoize (cache) this function to 
  // prevent it being ... over subscribed :)
  my.subscribe = _.memoize( function(channel) {
    return my.pusher.subscribe(channel);
  });

  my.listen_on = _.memoize( function(channel, call_event) {
    my.subscribe(channel).bind(call_event, notification_callback);
  });

  my.stop_listening = _.memoize( function(channel, call_event) {
    my.subscribe(channel).unbind(call_event, undefined);
  });

  my.initialize();
  return my;
});

