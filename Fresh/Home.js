// JavaScript Document
function get (){

    fetch('https://api.climacell.co/v3/weather/forecast/hourly?lat=45&lon=-93&location_id=shoreview&unit_system=us&start_time=now&end_time=2020-08-10T14%3A09%3A50Z&fields=temp%2Cfeels_like%2Cweather_code%2Chumidity%2Cprecipitation_probability%2Cwind_speed%2Cwind_direction%2Cbaro_pressure&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
	.then(response => response.json())
	.then(data => (console.log(data)))


    

    

    var x = document.getElementById("location");
    function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    }
    getLocation();

    function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    }
    

	fetch('https://api.climacell.co/v3/weather/forecast/hourly?lat=45&lon=-93&location_id=shoreview&unit_system=us&start_time=now&end_time=2020-08-10T14%3A09%3A50Z&fields=temp%2Cfeels_like%2Cweather_code%2Chumidity%2Cprecipitation_probability%2Cwind_speed%2Cwind_direction%2Cbaro_pressure&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
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

function clock() {
	var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(clock, 1000);
    


}

clock();