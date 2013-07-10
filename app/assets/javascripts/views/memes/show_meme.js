MemeGenerator.Views.ShowMeme = Backbone.View.extend({
  template: JST['memes/show'],

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


})