var disable = function(){
	$('.center-men li').click(function (e) {
	  $('.iteml').attr({
	  	'class':'iteml'
	  });
	  $('.itemr').attr({
	  	'class':'itemr'
	  });
	});

	$('.left-menu li').click(function (a) {
	  $('.item').attr({
	  	'class': 'item'
	  });
	  $('.itemr').attr({
	  	'class':'itemr'
	  });
	});

	$('.right-menu li').click(function (a) {
	  $('.item').attr({
	  	'class': 'item'
	  });
	  $('.iteml').attr({
	  	'class':'iteml'
	  });
	});
}

$(document).ready(disable);

