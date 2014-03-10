//variables
    var watchID = null;

//device ready
	document.addEventListener("deviceready",onDeviceReady,false);

//on device ready
	function onDeviceReady(){
        $(document).ready(function(){
            alert('jquery running');
            $('#jquery_box').html('<p>set by jquery.mobile</p>');
        });
		navigator.accelerometer.getCurrentAcceleration(onSuccess,onError);
        startWatch();
	}
$('#jquery_button').click(function(){
    $('#jquery_box').html('<p>set by jquery.button event</p>');
});
//onSUCCES
	function onSuccess(acceleration){
		var accElement = document.getElementById('accellerometer_data');
			accElement.innerHTML = 
			"Acceleration X: " + acceleration.x + "<br />" + 
			"Acceleration Y: " + acceleration.y + "<br />" +
			"Acceleration Z: " + acceleration.z + "<br />" +
			"Timestamp: " + acceleration.timestamp;
	}
//onERROR
	function onError(error){
		var element = document.getElementById('accellerometer_data');
            element.innerHTML = 'Sorry, I was unable to access the acceleration data.';
	}

//function STARTWATCH
    function startWatch(){
        var options = { frequency: 3000 };
        document.getElementById('startBtn').disabled = true;
        document.getElementById('stopBtn').disabled = false;
        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }
//function STOPWATCH
    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;      
            var element = document.getElementById('accellerometer_data');
            element.innerHTML = 'No longer watching your acceleration.';
            document.getElementById('startBtn').disabled = false;
            document.getElementById('stopBtn').disabled = true;
        }
    }