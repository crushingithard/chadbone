(function() {

  module("Chadbone.noConflict");

  test('noConflict', 2, function() {
    var noconflictChadbone = Chadbone.noConflict();
    equal(window.Chadbone, undefined, 'Returned window.Chadbone');
    window.Chadbone = noconflictChadbone;
    equal(window.Chadbone, noconflictChadbone, 'Chadbone is still pointing to the original Chadbone');
  });

})();
