/* Open Weather Map api */
/* f0d6e0583c32177ac960f8b743c14ae0 */
/* TODO: C/F button, weather icons, get local files for bootstrap
and jquery*/

$(document).ready(function(){
	$.ajaxSetup({ cache: false });
	/* reqeusts location data from the browser */
	if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    	$.ajax({
    		url:'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?units=metric',
    		/*url:'http://api.openweathermap.org/data/2.5/weather?units=metric',*/
    		data:{
    			appid: 'f0d6e0583c32177ac960f8b743c14ae0',
    			lat: position.coords.latitude,
    			lon: position.coords.longitude,
    			
    				
    		},
    		success: function(response){
    			$("#city").html("<h1>" + response.name + "</h1>");
    			$("#temp").html("<h2>" + response.main.temp.toFixed() + "&deg;C</h2>");
    			$("#details").html("<h2>" + response.weather[0].description + "</h2>");
    		},
    		error: function(){
    			$("#city").html("<h2>Unable to contact api</h2>");
    		}
    	
    	})
   
    	
    	/* dummy output to test, puts the co-ords onto the page 
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " 
      	+ position.coords.longitude); */
    });
  } else {
  	$("#city").html("For local weather, please allow location access");
  };

});