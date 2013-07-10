MemeGenerator.Views.TemplatesIndex = Backbone.View.extend({
  events: {
    // 'click #meme': "newMeme"
  },

  template: JST['templates/index'],

  initialize: function() {
    var that = this;

    var events = ["add", "change", "remove", "reset"];
    _(events).each(function(event) {
      that.listenTo(that.collection, event, that.render);
    });
  },

  render: function() {
    var renderedContent = this.template({
      templates: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  },

  newMeme: function(event) {
    var that = this;
    event.preventDefault();

    console.log($(event.target).attr('data-id'));
  },

});
