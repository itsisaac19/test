// JavaScript Document
function get (){
	fetch('https://api.climacell.co/v3/weather/forecast/hourly?lat=45&lon=-93&location_id=shoreview&unit_system=us&start_time=now&end_time=2020-08- 09T14%3A09%3A50Z&fields=temp%2Cfeels_like&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
	.then(response => response.json())
	.then(data => console.log(data))

}



function hide() {
	document.getElementById("Misty")
	
	get();
}

hide();