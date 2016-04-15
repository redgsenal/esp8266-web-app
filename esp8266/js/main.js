$(function(){
	$('.pinbtn').click(function(){
		var $this = $(this);
		var isOn = 0;
		console.log('click');
		if ($this.hasClass('on')){
			$this.removeClass('on').addClass('off');
			isOn = 1;
		}else{
			$this.removeClass('off').addClass('on');
		}

		var c = $this.data("color");
		var s = isOn ? "OFF" : "ON";
		var n = c == "red" ? "2" : "1";
		s = s + n;
		// change ip as registered from ESP8266
		var pinurl = "http://192.168.1.75/?pin=" + s;
		console.log(c);
		$.ajax({
			url: pinurl
		});
	});
});