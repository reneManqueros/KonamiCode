(function($){
  $.fn.KonamiCode = function (callback) {
    var keys = [],
      code = '38,38,40,40,37,39,37,39,66,65';
    $(this).on('keydown', function (e) {
      keys.push(e.keyCode);
      if (keys.length === 10 && keys.join(',') === code) {
        keys = [];
        if (callback) {
          callback();
        }
      }
      if (keys.length > 10 || code.indexOf(keys.join(',')) !== 0){
        keys = [];
      }
    });
  };
})(jQuery);