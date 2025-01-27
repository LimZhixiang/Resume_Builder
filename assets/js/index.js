// const apikey=""

// const endpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=1.352&lon=103.81&appid=${apikey}`

// fetch(endpoint)
// .then((response) => {
// 	if (!response.ok) {
// 		throw new Error(`${response.status}`)
// 	}
// 	return response.json()
// })
// .then ((data) => {
// 	console.log(data.timezone_offset);
// 	console.log(data.daily);
// })
// .catch ((error) => {
// 	console.error(error);
// })


//create rain element
const rainGeneration = (containerId, numberofdrops) => {
	const container = document.getElementById(containerId);

	for (let i = 1; i <= numberofdrops; i++) {
		const span = document.createElement('span');
		span.style.zIndex = 1;
		span.style.width = '5px';
		span.style.height = '5px';
		span.style.position = 'absolute';
		span.style.borderRadius = '100%';
		span.style.background = 'white';
		span.style.top = '40px';
		span.style.left = `${(i - 1) * 5}px`;
		span.style.animation = 'raindrops linear infinite';
		span.style.animationDuration = `${15 / (Math.random() * (20 - 11) +  11)}s`;
		container.appendChild(span);
	}
}

// Creating rain effect
document.addEventListener('DOMContentLoaded', async () => {
	rainGeneration('pop-container', 26);
});


