require.config({
  paths: {
    'jquery' : '../../bower_components/jquery/dist/jquery'
  }
});
define([
  'jquery',
  '../../bower_components/marked/lib/marked',
  './plugins/toggle'
], function(jQuery, marked, toggle) {
  var App = function(name) {
    this.name = name;
    this.plugins = {
      toggle: toggle
    };
  };
  return App;
});
