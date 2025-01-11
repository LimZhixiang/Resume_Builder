const apikey="a69b6467b9d99c2d46d62391fe14587a"

const endpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=1.352&lon=103.81&appid=${apikey}`

fetch(endpoint)
.then((response) => {
	if (!response.ok) {
		throw new Error(`${response.status}`)
	}
	return response.json()
})
.then ((data) => {
	console.log(data.timezone_offset);
	console.log(data.daily);
})
.catch ((error) => {
	console.error(error);
})