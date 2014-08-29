require.config({
  paths: {
    'jquery' : '../../bower_components/jquery/dist/jquery'
  }
});
define([
  'jquery',
  './plugins/toggle'
], function(jQuery, toggle) {
  var App = function(name) {
    this.name = name;
    this.plugins = {
      toggle: toggle
    };
  };
  return App;
});
