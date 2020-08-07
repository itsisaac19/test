// JavaScript Document

fetch('https://api.climacell.co/v3/weather/forecast/hourly?lat='+lat+'&lon='+lon+'&location_id='+city+'&unit_system=us&start_time=now&end_time='+next4days+'T12%3A00%3A00&fields=precipitation_probability%2Chumidity%2Cwind_speed%2Ctemp&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
.then(response => response.json())
.then(data => (console.log(data))