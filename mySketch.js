// add your name here: 

let img;
let x, y, x1, y1;

let data = {
	places: [
		{
			x: 1250,
			y: 562,
			latitude: 31.22222,
			longitude: 121.45806,
			name: "Shanghai",
		}
		, {
			x: 840,
			y: 780,
			latitude: -17.824858,
			longitude: 31.053028,
			name: "Harare",
		}

	]
};

function preload() {
	img = loadImage("world-map.jpg");
}

function setup() {
	imageScale = windowWidth / img.width;
	img.resize(windowWidth, 0);
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	image(img, 0, 0);
	textSize(20);
	// for (i=0; i<2;i++){

	// }
	// let x = map(place.longitude, -180,180,0,width);
	// let y = map(place.latitude, 90,-90,0,height);
	let x = data.places[0].x * imageScale;
	let y = data.places[0].y * imageScale;
	circle(x, y, 10);
	text(data.places[0].name, x, y);

	let x1 = data.places[1].x * imageScale;
	let y1 = data.places[1].y * imageScale;
	circle(x1, y1, 10);
	text(data.places[1].name, x1, y1);
}

function mousePressed() {
	console.info([mouseX, mouseY]);
	console.info(mousePressed);
}
