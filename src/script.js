function div_show() {
	if (document.getElementById('request-popup').style.display = "block") {
		document.getElementById('button').style.display = "none"
	} else {
		document.getElementById('button').style.display = "none";
	}
}

function div_hide() {
	document.getElementById('button').style.display = "block";
	document.getElementById('request-popup').style.display = "none";
}

$(function() {
  $('#ticker').vTicker(
    {
      speed: 400,
      showItems: 1,
      pause: 1500,
      mousePause : false,
      direction: "up",
    }
  );
});
