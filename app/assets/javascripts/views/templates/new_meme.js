MemeGenerator.Views.NewMeme = Backbone.View.extend({
  events: {
    'click #saveMeme': 'newMeme'
  },

  template: JST['templates/new'],

  initialize: function() {
    var that = this;

    var events = ['add', 'change', 'remove', 'reset'];
    _(events).each(function(event) {
      that.listenTo(that.model, event, that.render);
    });
  },

  render: function() {
    var renderedContent = this.template({
      meme: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  newMeme: function() {
    var canvas = document.getElementById('myCanvas');
    var dataURL = canvas.toDataURL('image/jpeg');

    var newImage = new MemeGenerator.Models.Meme();

    newImage.set({
      temp: dataURL
    });
    newImage.save({}, {
      success: function(model) {
        console.log('win')
        window.location.hash = ('show/' + model.id);
      }
    });
  }

});