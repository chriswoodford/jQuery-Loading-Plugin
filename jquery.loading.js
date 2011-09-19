/**
 * 
 */

(function($){
	$.fn.loading = function(method) {
  
		var settings = {
			text: 'loading...',
			className: 'loader',
			bgImage: null
		};
	
		var methods = {
			start: function() { 
				if (this.css('display') != 'none') {
					this.hide();
					this.after(loader);
				}
			},
			stop: function() {
				if (this.css('display') == 'none') {
					this.next().remove();
					this.show();					
				}
			}
		};

		var loader = $('<div class="' + settings['className'] + '">' + settings['text'] + '</div>');

	    // Method calling logic
	    if (methods[method]) {
	      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	    } else {
	      $.error('Method ' +  method + ' does not exist on jQuery.loading');
	    }    

	};
})(jQuery);
