// Attaches to element, as you scroll down page attaches the video to image and calls animation. Loops through all on page -> Only one time.
// EXP use: EL.scrollPlayer.init();
// <div class="feature_player"><img src="" /></div>

EL.scrollPlayer = (function() {
var init = function() {
	var documentHeight = $('body').height();
	var featureMap = [];
	$('.feature').each(function() {
		featureMap.push({
			jObj: $(this), hasPlayed: false
		})
	})
	var playedNum = 0;
	function checkForOffset(elements, index, array) {
		if(elements.hasPlayed != true && $(document).scrollTop() + 150 >= elements.jObj.offset().top) {
			elements.hasPlayed = true;
			playedNum++;
			var elPlayer = elements.jObj.find('.feature_player');
			elPlayer.theVideo({
				type: 'feature' + playedNum,
	    			name: 'feature' + playedNum,
				height: elPlayer.find('img').height(),
				width: elPlayer.find('img').width(),
				poster: '/videos/poster/',
				video: '/videos/',
				page: 'homepage'
			});
		}
	}
	$(document).scroll(function() {
		featureMap.forEach(checkForOffset);
	});
}
return {
	init: init
};
})();
