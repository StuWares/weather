/* Open Weather Map api */
/* f0d6e0583c32177ac960f8b743c14ae0 */
/* using cors-anywhere.herokuapp.com as a proxy due to weather api not
supporting https*/
/* TODO: weather icons, get local files for bootstrap
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
    		/* render json data*/
    		success: function(response){
    			var units = "metric";
    			var degF = response.main.temp * 9/5 + 32;
    			

    			$("#city").html("<h1>" + response.name + "</h1>");
    			$("#temp").html("<h2>" + response.main.temp.toFixed() + "&deg;C</h2>");
    			$("#details").html("<h2>" + response.weather[0].description + "</h2>");
    			$("#symbol").html('<img src="https://openweathermap.org/img/w/' + response.weather[0].icon + '.png">');

    			$("#temp").on("click", function() {
    					
    				if (units === "imperial") {
    					$("#temp").html("<h2>" + response.main.temp.toFixed() + "&deg;C</h2>");
    					units = "metric"; 
    				}
    				else if (units === "metric") {
    					$("#temp").html("<h2>" + degF.toFixed() + "&deg;F</h2>");
    					units = "imperial";
    				}
    				

    			});

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