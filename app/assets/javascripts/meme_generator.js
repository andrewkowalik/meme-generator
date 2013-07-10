window.MemeGenerator = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    MemeGenerator.templates = new MemeGenerator.Collections.Templates();

    new MemeGenerator.Routers.Templates({
      "$rootEl": $("#container")
    });
    Backbone.history.start();

  }
};

$(document).ready(function(){
  MemeGenerator.initialize();
});
