MemeGenerator.Routers.Templates = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'index',
    'new_meme/:id': 'newMeme',
  },

  index: function() {
    var that = this;

    var indexView = new MemeGenerator.Views.TemplatesIndex({
      collection: MemeGenerator.templates
    });
    MemeGenerator.templates.fetch();
    that.$rootEl.html(indexView.render().$el);
  },

  newMeme: function(id) {
    var that = this;

    var meme = MemeGenerator.Models.Template.findOrCreate({id: id});

    var newMemeView = new MemeGenerator.Views.NewMeme({
      model: meme
    });

    meme.fetch();

    that.$rootEl.html(newMemeView.render().$el);

  },

});
