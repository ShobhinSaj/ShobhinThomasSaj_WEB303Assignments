/*
	WEB 303 Assignment 1 - jQuery
	Shobhin Thomas Saj
	#0819372
*/
$(document).ready(function () {

	$('#percent').on('change', function () {
		var $yrlysalry = $('#yearly-salary').val();			//store yearly salary
		var $prcntge = $('#percent').val();					//store percentage value entered
		$yrlysalry = ($yrlysalry * $prcntge / 100).toFixed(2);	//calculate amount and round off
		$('#amount').text("$" + $yrlysalry);
	});
});
