// JavaScript Document
function hide() {
    document.getElementById("darkTheme").style.display = "none"
    document.getElementById("Units").style.display = "none"
    document.getElementById("switch11").style.display = "none"

    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light")
    }

    theme = localStorage.getItem("theme")

    
}
hide();

var theme = "light"

document.getElementById("hamburger").addEventListener("click", function(){

    document.getElementById("settingspreview").style.display = "block"
    
  }); 

  document.getElementById("close").addEventListener("click", function(){

    document.getElementById("settingspreview").style.display = "none"
    
  }); 

//custiomize menu hud

  document.getElementById("Preferences").addEventListener("click", function(){

    document.getElementById("Preferences").style.display = "none"
    document.getElementById("Customize").style.display = "none"
    document.getElementById("Feedback").style.display = "none"

    document.getElementById("darkTheme").style.display = "block"
    document.getElementById("Units").style.display = "block"
    document.getElementById("switch11").style.display = "block"



  }); 
//Dark Theme


    document.getElementById("switch11").addEventListener("click", function(){

        setTimeout(function(){

            console.log(document.getElementById("check19").checked)

            var checkedtheme = (document.getElementById("check19").checked)
            
            document.getElementById("innertest1").innerHTML = checkedtheme

            console.log(document.getElementById("innertest1").innerHTML)


            if (document.getElementById("innertest1").innerHTML == "true") {

                theme = "dark"

                document.getElementById("containertopleft").style.color = "black"

                localStorage.setItem("theme", "dark")

            
            }
            if (document.getElementById("innertest1").innerHTML == "false") {

                theme = "light"

                document.getElementById("containertopleft").style.color = "white"

                
                localStorage.setItem("theme", "light")

            
            }

        }, 500);


    });



function get (){

    fetch('https://api.climacell.co/v3/weather/forecast/hourly?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&location_id=shoreview&unit_system=us&start_time=now&end_time=2020-08-12T14%3A09%3A50Z&fields=temp%2Cfeels_like%2Cweather_code%2Chumidity%2Cprecipitation_probability%2Cwind_speed%2Cwind_direction%2Cbaro_pressure&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
	.then(response => response.json())
	.then(data => (console.log(data)))


    document.getElementById("submit").addEventListener("click", function(){

        var lat = document.getElementById("fname").value
        var lon = document.getElementById("lname").value

        console.log(lat)
        console.log(lon)

        localStorage.setItem("lat", lat)
        localStorage.setItem("lon", lon)

        document.getElementById("coordinatesform").style.display = "none"
        
      }); 

    document.getElementById("iconlocation").addEventListener("click", function(){

        if (document.getElementById("coordinatesform").style.display == "none") {
            
            document.getElementById("coordinatesform").style.display = "block"

        } else {
            document.getElementById("coordinatesform").style.display = "none"
        }
        
      }); 

	fetch('https://api.climacell.co/v3/weather/forecast/hourly?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&location_id=shoreview&unit_system=us&start_time=now&end_time=2020-08-12T14%3A09%3A50Z&fields=temp%2Cfeels_like%2Cweather_code%2Chumidity%2Cprecipitation_probability%2Cwind_speed%2Cwind_direction%2Cbaro_pressure&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
	.then(response => response.json())
	.then(data => {

		var currenttemp = Math.floor(data[0]["temp"]["value"])
		var currenticonstart = (data[0]['weather_code']["value"])
        var currenthumidity = Math.floor(data[0]["humidity"]["value"])
        var currentrainchance = data[0]["precipitation_probability"]["value"]
        var currentwindspeed = Math.floor(data[0]["wind_speed"]["value"])
        var currentairp = data[0]["baro_pressure"]["value"]


		currenticonend = "color/" + currenticonstart + "_day.svg"

		console.log(currenticonstart)
        
        document.getElementById("icon").innerHTML = currenticonend;
		document.getElementById("icon").src = currenticonend;
		document.getElementById("tempnow").innerHTML = currenttemp + "° F";
        document.getElementById("stat1").innerHTML = currenthumidity + " %";
        document.getElementById("stat2").innerHTML = currentrainchance + " %";
        document.getElementById("stat3").innerHTML = currentwindspeed + " mph";
        document.getElementById("stat4").innerHTML = currentairp + " inHg";

		
	}
	)
}
get();

function updateClock() {
    var currentTime = new Date();
    // Operating System Clock Hours for 12h clock
    var currentHoursAP = currentTime.getHours();
    // Operating System Clock Hours for 24h clock
    var currentHours = currentTime.getHours();
    // Operating System Clock Minutes
    var currentMinutes = currentTime.getMinutes();
    // Operating System Clock Seconds
    var currentSeconds = currentTime.getSeconds();
    // Adding 0 if Minutes & Seconds is More or Less than 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    // Picking "AM" or "PM" 12h clock if time is more or less than 12
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    // transform clock to 12h version if needed
    currentHoursAP = (currentHours > 12) ? currentHours - 12 : currentHours;
    // transform clock to 12h version after mid night
    currentHoursAP = (currentHoursAP == 0) ? 12 : currentHoursAP;
    // display first 24h clock and after line break 12h version
    
    
    //ATTENTION: REFRENCE FOR CUSTOMIZE: var currentTimeString = "24h kello: " + currentHours + ":" + currentMinutes + ":" + currentSeconds + "" + "<br>" + "12h kello: "    + currentHoursAP + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    
    var currentTimeString = currentHoursAP + ":" + currentMinutes + " " +  timeOfDay;
    // print clock js in div #clock.
    document.getElementById("clock").innerHTML = currentTimeString

    setInterval(updateClock, 1000);

   
}
    
    
