(function() {

	function init() {
		_init.event();
	}

	var _init = {
		event: function() {
			$('.turnTable-btn').on('click', _method.startTurn);
		}
	}

	var _method = {
		startTurn: function(e) {
			e.preventDefault();
			var turnTableBg = $('.turnTable-bg');
			turnTableBg.addClass('startTurn');
		}
	}

	init();

})();