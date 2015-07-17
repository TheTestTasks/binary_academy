var finalhandler = require('finalhandler');
var http         = require('http');
var Router       = require('router');
var bodyParser   = require('body-parser');
var dataProvider = require('../common/dataProvider.js');

var router = Router();
router.use(bodyParser.urlencoded());

router.get('/countries', function (req, res) {	
	res.end(JSON.stringify({
		"status": "success",
		"countries": dataProvider.getAllCountries()
	}));
});
 
router.get('/country/:country/hotels', function (req, res) {
	var countryName = req.params.country;
	if (!dataProvider.isCountryExists(countryName)) {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Country '" + countryName + "' not exists"
		}));
	}
	
	res.end(JSON.stringify({
		"status": "success",
		"hotels": dataProvider.getHotelsByCountry(countryName)
	}));
});

router.post('/country', function (req, res) {	
	var countryName = req.body.Country;
	if (dataProvider.isCountryExists(countryName)) {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Country '" + countryName + "' already exists"
		}));
	}

	dataProvider.addCountry(countryName);

	res.end(JSON.stringify({
		"status": "success"
	}));
});

router.post('/country/:name/hotel', function (req, res) {	
	var countryName = req.params.name;	
	if (!dataProvider.isCountryExists(countryName)) {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Country '" + countryName + "' not exists"
		}));
	}

	var hotelName = (req.body.Name || "").trim();
	var hotelDescription = (req.body.Description || "").trim();
	if (hotelName == '') {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Hotel Name required"
		}));
		return;		
	}
	if (hotelDescription == '') {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Hotel Description required"
		}));
		return;
	}
	if (dataProvider.getHotelByName(hotelName, countryName)) {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Hotel '" + hotelName + "' in country '" + countryName + "' already exists"
		}));
		return;
	}
	
	dataProvider.addHotel({
		"Country": countryName,
		"Name": hotelName,
		"Description": hotelDescription
	});
	
	res.end(JSON.stringify({
		"status": "success"
	}));
});

router.get('/hotel/:id', function (req, res) {	
	var id = parseInt(req.params.id, 10);	
	var hotel = dataProvider.getHotelById(id);
	if (!hotel) {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Hotel with id='" + id + "' not exisits"
		}));
		return;
	}
	
	res.end(JSON.stringify({
		"status": "success",
		"hotel": hotel
	}));
});

router.delete('/hotel/:id', function (req, res) {	
	var id = parseInt(req.params.id, 10);	
	var hotel = dataProvider.getHotelById(id);
	if (!hotel) {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Hotel with id='" + id + "' not exisits"
		}));
		return;
	}

	dataProvider.deleteHotelById(id);
	
	res.end(JSON.stringify({
		"status": "success"
	}));
});

router.put('/hotel/:id', function (req, res) {
	var id = parseInt(req.params.id, 10);
	var hotel = dataProvider.getHotelById(id);
	if (!hotel) {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Hotel with id='" + id + "' not exisits"
		}));
		return;
	}

	var countryName = (req.body.Country || "").trim();
	if (!dataProvider.isCountryExists(countryName)) {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Country '" + countryName + "' not exists"
		}));
	}

	var hotelName = (req.body.Name || "").trim();
	var hotelDescription = (req.body.Description || "").trim();
	if (hotelName == '') {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Hotel Name required"
		}));
		return;		
	}
	if (hotelDescription == '') {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Hotel Description required"
		}));
		return;
	}
	
	var existingHotel = dataProvider.getHotelByName(hotelName, countryName);	
	if (existingHotel && existingHotel.id != id) {
		res.statusCode = 500;
		res.end(JSON.stringify({
			"status": "error",
			"error": "Hotel '" + hotelName + "' in country '" + countryName + "' already exists"
		}));
		return;
	}
	
	dataProvider.updateHotelById(id, {
		"Country": countryName,
		"Name": hotelName,
		"Description": hotelDescription,
	});
	
	res.end(JSON.stringify({
		"status": "success"
	}));
});

var server = http.createServer(function(req, res) {
	res.setHeader('Content-Type', 'text/plain; charset=utf-8');
	router(req, res, finalhandler(req, res));
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");