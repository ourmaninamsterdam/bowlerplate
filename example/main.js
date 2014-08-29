require({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery'
  }
}, [
  '../src/app/app',
  'jquery'
], function (
  app,
  $
) {

});
