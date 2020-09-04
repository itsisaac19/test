// JavaScript Document
function hide() {
    document.getElementById("darkTheme").style.display = "none"
    document.getElementById("Units").style.display = "none"
    document.getElementById("switch11").style.display = "none"

    document.getElementById("switch22").style.display = "none"

    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light")
    }
    if (localStorage.getItem("theme") == "light") {
        document.getElementById("check19").checked = false
        themeLight();
    }    
    if (localStorage.getItem("theme") == "dark") {
        document.getElementById("check19").checked = true
        themeDark();
    }
    if (localStorage.getItem("units") == "us") {
        document.getElementById("check29").checked = false
        
    }    
    if (localStorage.getItem("units") == "si") {
        document.getElementById("check29").checked = true
        
    }

    if (localStorage.getItem("lat") === null) {
        localStorage.setItem("lat", 45)

        localStorage.setItem("welcome", "yes")
    }
    if (localStorage.getItem("lon") === null) {
        localStorage.setItem("lon", -93)
    }    
    if (localStorage.getItem("units") === null) {
        localStorage.setItem("units", "us")
    } 
    console.log(localStorage.getItem("units"))
}
hide();


//Settings:     ///////////////
document.getElementById("hamburger").addEventListener("click", function(){

    //Show and Hide the nessasary items
    document.getElementById("settingspreview").style.display = "block"
    document.getElementById("Preferences").style.display = "block"
    document.getElementById("Customize").style.display = "block"
    document.getElementById("Feedback").style.display = "block"

    document.getElementById("backgroundImage").style.display = "none"
    document.getElementById("Layout").style.display = "none"
    document.getElementById("darkTheme").style.display = "none"
    document.getElementById("Units").style.display = "none"
    document.getElementById("switch11").style.display = "none"
    document.getElementById("switch22").style.display = "none"
    document.getElementById("settingspreview").style.height = "150px"

    
  }); 

  document.getElementById("close").addEventListener("click", function(){

    document.getElementById("settingspreview").style.display = "none"
    
  }); 

//Preferences:

  document.getElementById("Preferences").addEventListener("click", function(){

    document.getElementById("Preferences").style.display = "none"
    document.getElementById("Customize").style.display = "none"
    document.getElementById("Feedback").style.display = "none"

    document.getElementById("darkTheme").style.display = "block"
    document.getElementById("Units").style.display = "block"
    document.getElementById("switch11").style.display = "block"
    document.getElementById("switch22").style.display = "block"
    document.getElementById("settingspreview").style.height = "220px"




  }); 
// Preferences>Themes:


    function themeToggle(){

        setTimeout(function(){

            //console.log(document.getElementById("check19").checked)

            var checkedtheme = (document.getElementById("check19").checked)
            document.getElementById("innertest1").innerHTML = checkedtheme

            //console.log(document.getElementById("innertest1").innerHTML)


            if (document.getElementById("innertest1").innerHTML == "true") {
                
                document.getElementById("containertopleft").style.color = "black"
                document.getElementById("containertopright").style.color = "black"
                document.getElementById("clock").style.color = "black"
                document.getElementById("location").style.color = "black"
                localStorage.setItem("theme", "dark")

            
            }
            if (document.getElementById("innertest1").innerHTML == "false") {

                document.getElementById("containertopleft").style.color = "white"
                document.getElementById("containertopright").style.color = "white"
                document.getElementById("clock").style.color = "white"
                document.getElementById("location").style.color = "white"
                localStorage.setItem("theme", "light")

            
            }

        }, 100);

    };

    function themeLight() {
        document.getElementById("containertopleft").style.color = "white"
        document.getElementById("containertopright").style.color = "white"
        document.getElementById("clock").style.color = "white"
        document.getElementById("location").style.color = "white"
        localStorage.setItem("theme", "light")
    }
    function themeDark() {
        document.getElementById("containertopleft").style.color = "black"
        document.getElementById("containertopright").style.color = "black"
        document.getElementById("clock").style.color = "black"
        document.getElementById("location").style.color = "black"
        localStorage.setItem("theme", "dark")
    }


//Preferences>Units:


    function unitToggle() {

        setTimeout(function(){

            var checkedUnit = (document.getElementById("check29").checked)
            document.getElementById("innertest2").innerHTML = checkedUnit

            if (document.getElementById("innertest2").innerHTML == "true") {   
                localStorage.setItem("units", "si")
                document.getElementById("US").style.display = "none"
            }
            if (document.getElementById("innertest2").innerHTML == "false") {   
                localStorage.setItem("units", "us")
                document.getElementById("US").style.display = "block"

            }
            

            getCurrentWeather();
        }, 100);


    }
//Customize

    document.getElementById("Customize").addEventListener("click", function(){

    document.getElementById("Preferences").style.display = "none"
    document.getElementById("Customize").style.display = "none"
    document.getElementById("Feedback").style.display = "none"

    document.getElementById("backgroundImage").style.display = "block"
    document.getElementById("Layout").style.display = "block"

    document.getElementById("settingspreview").style.height = "240px"

    });

    //Customize>BackgroundImage

    function backgroundImageChange() {

        var elo = 6

        if (elo == 5) [
            elo = 3
        ]

    }
    //Customize>Layout

    function layoutChange() {

        var elo = 6

        if (elo == 5) [
            elo = 3
        ]
    }

    document.getElementById("iconlocation").addEventListener("click", function(){

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
        }

    })


    function showPosition(position) {
       
        localStorage.setItem("lat", position.coords.latitude)
        localStorage.setItem("lon", position.coords.longitude) 
        
        //console.log(localStorage.getItem("lat"))

        getCurrentWeather();
    }

    function showError(error) {
        switch(error.code) {
        case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.") 
        break;
        case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
        case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
        case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
    }
    }


function getCurrentWeather (){



    //ALWAYS 4 DAYS IN THE FUTURE TIME:

    var f = new Date();
	var u = f.getMonth()+1;
	var c = f.getDate()+4;

	if (c > 31) {
		if (u=="01") {
			console.log("ALERT OVERFLOWING FROM JANUARY TO FEBRUARY");
			c = (c - 31);
		}
	}

	// LEAP YEAR WUT BELOW
	if (u > 28) {
		if (u=="02") {
			console.log("ALERT OVERFLOWING FROM FEBRUARY TO MARCH");
			c = (c - 28);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="03") {
			console.log("ALERT OVERFLOWING FROM MARCH TO APRIL");
			c = (c - 31);
			u = (u+1);
		}
	} 
	if (c > 30) {
		if (u=="04") {
			console.log("ALERT OVERFLOWING FROM APRIL TO MAY");
			c = (c - 30);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="05") {
			console.log("ALERT OVERFLOWING FROM MAY TO JUNE");
			c = (c - 31);
			u = (u+1);
		}
	} 
	if (c > 30) {
		if (u=="06") {
			console.log("ALERT OVERFLOWING FROM JUNE TO JULY");
			c = (c - 30);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="07") {
			console.log("ALERT OVERFLOWING FROM JULY TO AUGUST");
			c = (c - 31);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="08") {
			console.log("ALERT OVERFLOWING FROM AUGUST TO SEPTEMBER");
			c = (c - 31);
			u = (u+1);
		}
	} 
	if (c > 30) {
		if (u=="09") {
			console.log("ALERT OVERFLOWING FROM SEPTEMBER TO OCTOBER");
			c = (c - 30);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="10") {
			console.log("ALERT OVERFLOWING FROM OCTOBER TO NOVEMBER");
			c = (c - 31);
			u = (u+1);
		}
	} 
	if (c > 30) {
		if (u=="11") {
			console.log("ALERT OVERFLOWING FROM NOVEMBER TO DECEMBER");
			c = (c - 30);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="12") {
			console.log("ALERT OVERFLOWING FROM DECEMBER TO JANUARY");
			c = (c - 31);
			u = (01);
		}
	}
	if (c < 10) {
		c = "0" + c;
	}
	if (u < 10) {
		u = "0" + u;
	}

	var next4days = "2020-" + u + "-"+ c  
    //console.log(next4days)
    

    //Reference calls:
    //Note: ONLY USE FOR DEBUGGING OTHERWISE THESE ARE UNNESSACARY CALLS THAT WILL ADD UP TO OUR LIMIT

    //fetch('https://api.climacell.co/v3/weather/realtime?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system='+localStorage.getItem("units")+'&fields=temp%2Csunrise%2Csunset&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
	//.then(response => response.json())
	//.then(data => (console.log(data)))

    //fetch('https://us1.locationiq.com/v1/reverse.php?key=01b9e5c630a3b1&lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&format=json')
    //.then(response => response.json())
    //.then(data => (console.log(data)))
    
    //fetch('https://api.climacell.co/v3/weather/realtime?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system='+localStorage.getItem("units")+'&fields=temp%2Chumidity%2Cwind_speed%2Cbaro_pressure%2Cweather_code%2Csunrise%2Csunset&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
	//.then(response => response.json())
	//.then(data => (console.log(data)))




    //DATA PLACEMENT

    fetch('https://us1.locationiq.com/v1/reverse.php?key=01b9e5c630a3b1&lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&format=json')
    .then(response => response.json())
	.then(data => {

        var city = data['address']['city']
        console.log(city)

        document.getElementById("location").innerHTML = city
    });


    //HOURLY
    fetch('https://api.climacell.co/v3/weather/forecast/hourly?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&location_id=shoreview&unit_system='+localStorage.getItem("units")+'&start_time=now&end_time='+next4days+'T14%3A09%3A50Z&fields=precipitation_probability&apikey=gjkSy3KHmWy7xWUrToVJA24shlhC5w5z')
	.then(response => response.json())
	.then(data => {
        var currentrainchance = data[0]["precipitation_probability"]["value"]
        document.getElementById("stat2").innerHTML = currentrainchance + " %";
    })    

    //REALTIME
    fetch('https://api.climacell.co/v3/weather/realtime?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system='+localStorage.getItem("units")+'&fields=temp%2Chumidity%2Cwind_speed%2Cbaro_pressure%2Cweather_code%2Csunrise%2Csunset&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
	.then(response => response.json())
	.then(data => {

		var currenttemp = Math.floor(data['temp']['value'])
        var currenticonstart = (data['weather_code']["value"])
        var currenthumidity = Math.floor(data["humidity"]["value"])
        var currentwindspeed = Math.floor(data["wind_speed"]["value"])
        var currentairp =  data["baro_pressure"]["value"]
        var currentairpFinal = currentairp.toFixed(2)


        //Finish customizing 'currenticonstart' for each variable weather code!!:

        switch (currenticonstart) {
            default:
                currenticonend = "color/clear_day.svg"
                break;

            case "clear": 
            //day/night
                currenticonend = "color/clear_day.svg"
                break;

            case "cloudy":   
                currenticonend = "color/cloudy.svg" 
                break;

            case "drizzle":   
                currenticonend = "color/drizzle.svg" 
                break;

            case "flurries":   
                currenticonend = "color/flurries.svg" 
                break;

            case "fog":   
                currenticonend = "color/fog.svg" 
                break;

            case "fog_light":  
                currenticonstart = "Light Fog"            
                currenticonend = "color/fog_light.svg" 
                break;

            case "freezing_drizzle":  
                currenticonstart = "Freezing Drizzle"    
                currenticonend = "color/freezing_drizzle.svg" 
                break;

            case "freezing_rain_light":  
                currenticonstart = "UNDER CONSTRUCTION"    
                currenticonend = "color/freezing_rain_light.svg" 
                break;    

            case "freezing_rain":   
            currenticonstart = "UNDER CONSTRUCTION"  
                currenticonend = "color/freezing_rain.svg" 
                break;    
                
            case "freezing_rain_heavy": 
            currenticonstart = "UNDER CONSTRUCTION"    
                currenticonend = "color/freezing_rain_heavy.svg" 
                break;  
                
            case "ice_pellets_light": 
            currenticonstart = "UNDER CONSTRUCTION"    
                currenticonend = "color/ice_pellets_light.svg" 
                break;

            case "ice_pellets":   
            currenticonstart = "UNDER CONSTRUCTION"  
                currenticonend = "color/ice_pellets.svg" 
                break;

            case "ice_pellets_heavy":   
            currenticonstart = "UNDER CONSTRUCTION"  
                currenticonend = "color/ice_pellets_heavy.svg" 
                break;

            case "mostly_clear":
                currenticonstart = "Mostly Clear"  
                //day/night
                currenticonend = "color/mostly_clear_day.svg"
                break;

            case "mostly_cloudy":
                currenticonstart = "Mostly Cloudy"
                currenticonend =  "color/mostly_cloudy_day.svg"
                break;    

            case "partly_cloudy":
                currenticonstart = "Partly Cloudy"
                //day/night
                currenticonend =  "color/partly_cloudy_day.svg"
                break; 
        
            case "rain_light":
                currenticonend =  "color/rain_light.svg"
                break;

            case "rain":
                currenticonend =  "color/rain.svg"
                break; 

            case "rain_heavy":
                currenticonend =  "color/rain_heavy.svg"
                break;  
                
            case "snow_light":
                currenticonend =  "color/snow_light.svg"
                break;  

            case "snow":
                currenticonend =  "color/snow.svg"
                break;  
                
            case "snow_heavy":
                currenticonend =  "color/snow_heavy.svg"
                break;   

            case "tstorm":
                currenticonend =  "color/tstorm.svg"
                break;   
            }   

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        
        document.getElementById("icon").src = currenticonend;
        document.getElementById("desc").innerHTML = (capitalizeFirstLetter(currenticonstart));
		document.getElementById("tempnow").innerHTML = currenttemp + "° " + data["temp"]["units"];
        document.getElementById("stat1").innerHTML = currenthumidity + " " + data["humidity"]["units"];
        document.getElementById("stat3").innerHTML = currentwindspeed + " " + data["wind_speed"]["units"];
        document.getElementById("stat4").innerHTML = currentairpFinal + " " + data["baro_pressure"]["units"];

	});
} getCurrentWeather();




//LIVE CLOCK

function updateClock() {
    var dateInfo = new Date();
  
    /* time */
    var hr,
      _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
      ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";
  
    // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
    if (dateInfo.getHours() == 0) {
      hr = 12;
    } else if (dateInfo.getHours() > 12) {
      hr = dateInfo.getHours() - 12;
    } else {
      hr = dateInfo.getHours();
    }
  
    var currentTime = hr + ":" + _min + " " + ampm;
  
    // print time
    document.getElementById("clock").innerHTML = currentTime;
  
    /* date */
    var dow = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      day = dateInfo.getDate();
  
    // store date
    var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;
  
    document.getElementsByClassName("date").innerHTML = currentDate;
  };
  
  // print time and date once, then update them every second
  updateClock();
  setInterval(function() {
    updateClock()
  }, 1000);
    
    
