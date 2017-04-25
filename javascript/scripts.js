/* Open Weather Map api */
/* f0d6e0583c32177ac960f8b743c14ae0 */

$(document).ready(function(){

	/* reqeusts location data from the browser */
	if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    	$.ajax({
    		url:'http://api.openweathermap.org/data/2.5/weather?',
    		data:{
    			appid: 'f0d6e0583c32177ac960f8b743c14ae0',
    			lat: position.coords.latitude,
    			lon: position.coords.longitude,
    			
    			
    		},
    		success: function(response){
    			$("#city").html(response.name);
    		}
    	
    	})
    	/*function wData(data){
    		console.log(JSON.sys.name); 

    	}; */
   
    	
    	/* dummy output to test, puts the co-ords onto the page 
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " 
      	+ position.coords.longitude); */
    });
  } else {
  	$("#city").html("For local weather, please allow location access");
  };

});