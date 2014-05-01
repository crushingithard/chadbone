(function() {

  var sync = Chadbone.sync;
  var ajax = Chadbone.ajax;
  var emulateHTTP = Chadbone.emulateHTTP;
  var emulateJSON = Chadbone.emulateJSON;
  var history = window.history;
  var pushState = history.pushState;
  var replaceState = history.replaceState;

  QUnit.testStart(function() {
    var env = this.config.current.testEnvironment;

    // We never want to actually call these during tests.
    history.pushState = history.replaceState = function(){};

    // Capture ajax settings for comparison.
    Chadbone.ajax = function(settings) {
      env.ajaxSettings = settings;
    };

    // Capture the arguments to Chadbone.sync for comparison.
    Chadbone.sync = function(method, model, options) {
      env.syncArgs = {
        method: method,
        model: model,
        options: options
      };
      sync.apply(this, arguments);
    };

  });

  QUnit.testDone(function() {
    Chadbone.sync = sync;
    Chadbone.ajax = ajax;
    Chadbone.emulateHTTP = emulateHTTP;
    Chadbone.emulateJSON = emulateJSON;
    history.pushState = pushState;
    history.replaceState = replaceState;
  });

})();
