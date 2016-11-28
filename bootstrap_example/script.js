$(document).ready(function(){
	
	var selectedCardIdx = -1;
	var cardsArray = $('.card');
	console.log(cardsArray);

	$('.panes-container').on('click', '.btn-focus', function() {
		
		var $pane = $(this).closest('.pane');
		var $panesContainer = $pane.closest('.panes-container');
		var $appPanes = $panesContainer.find('.pane');

		if ($pane.hasClass('primary')) {
			
			$pane.removeClass('primary');
			$panesContainer.removeClass('expanded');
		
		} else {
			
			$allPanes.removeClass('primary');
			$pane.addClass('primary');
			$panesContainer.addClass('expanded');
		}
		
	});

});