MemeGenerator.Routers.Templates = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'index',
  },

  index: function() {
    var that = this;

    var indexView = new MemeGenerator.Views.TemplatesIndex({
      collection: MemeGenerator.templates
    });
    MemeGenerator.templates.fetch();
    that.$rootEl.html(indexView.render().$el);
  },

});
