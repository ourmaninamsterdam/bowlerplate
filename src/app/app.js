require.config({
  paths: {
    'jquery' : '../../bower_components/jquery/dist/jquery'
  }
});
define([
  'jquery',
  '../../bower_components/marked/lib/marked'
], function(jQuery, marked) {
  var App = function(name) {
    this.name = name;
  };
  return App;
});
