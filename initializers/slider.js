window.addEvent("domready", function () {
	/* opacity slider */
	var mySlide = new Slider($('opacity-area'), $('opacity-slider'), {
		steps: 100,
		wheel: 1,
		onChange: function(step){
			$('opacity-label').set('html',step);
			$('muse').set('opacity',step / 100);
		}
	}).set(100);
	
	/* height slider */
	var mySlide = new Slider($('height-area'), $('height-slider'), {
		steps: 300,
		wheel: 1,
		onChange: function(step){
			$('height-label').set('html',step);
			$('muse').set('height',step);
		}
	}).set(300);
	
	/* width slider */
	var mySlide = new Slider($('width-area'), $('width-slider'), {
		steps: 300,
		wheel: 1,
		onChange: function(step){
			$('width-label').set('html',step);
			$('muse').set('width',step);
		}
	}).set(300);
});
