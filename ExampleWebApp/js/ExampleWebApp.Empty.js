/// <reference path="jquery-1.9.1-vsdoc.js" />
(function ($) {
    var methods = {
        init: function(options) {
            return this.each(function() {
                var $this = $(this);

            });
        }
    };

$.fn.EmptyPlugin = function(method) {

    if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
    } else {
        $.error('Method ' + method + ' does not exist on jQuery.suzyProfile');
    }
}
})(jQuery);