var express 	 = require('express');
var bodyParser   = require('body-parser');
var dataProvider = require('../common/dataProvider.js');

var app = express();
app.use(bodyParser.urlencoded());

var router = express.Router();
router.get('/countries', function (req, res) {	
	res.json({
		"status": "success",
		"countries": dataProvider.getAllCountries()
	});
});


router.get('/country/:country/hotels', function (req, res) {
	var countryName = req.params.country;
	if (!dataProvider.isCountryExists(countryName)) {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Country '" + countryName + "' not exists"
		});
	}
	
	res.json({
		"status": "success",
		"hotels": dataProvider.getHotelsByCountry(countryName)
	});
});

router.post('/country', function (req, res) {	
	var countryName = req.body.Country;
	if (dataProvider.isCountryExists(countryName)) {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Country '" + countryName + "' already exists"
		});
	}

	dataProvider.addCountry(countryName);

	res.json({
		"status": "success"
	});
});

router.post('/country/:name/hotel', function (req, res) {	
	var countryName = req.params.name;	
	if (!dataProvider.isCountryExists(countryName)) {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Country '" + countryName + "' not exists"
		});
	}

	var hotelName = (req.body.Name || "").trim();
	var hotelDescription = (req.body.Description || "").trim();
	if (hotelName == '') {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Hotel Name required"
		});
		return;		
	}
	if (hotelDescription == '') {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Hotel Description required"
		});
		return;
	}
	if (dataProvider.getHotelByName(hotelName, countryName)) {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Hotel '" + hotelName + "' in country '" + countryName + "' already exists"
		});
		return;
	}
	
	dataProvider.addHotel({
		"Country": countryName,
		"Name": hotelName,
		"Description": hotelDescription
	});
	
	res.json({
		"status": "success"
	});
});

router.get('/hotel/:id', function (req, res) {	
	var id = parseInt(req.params.id, 10);	
	var hotel = dataProvider.getHotelById(id);
	if (!hotel) {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Hotel with id='" + id + "' not exisits"
		});
		return;
	}
	
	res.json({
		"status": "success",
		"hotel": hotel
	});
});

router.delete('/hotel/:id', function (req, res) {	
	var id = parseInt(req.params.id, 10);	
	var hotel = dataProvider.getHotelById(id);
	if (!hotel) {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Hotel with id='" + id + "' not exisits"
		});
		return;
	}

	dataProvider.deleteHotelById(id);
	
	res.json({
		"status": "success"
	});
});

router.put('/hotel/:id', function (req, res) {
	var id = parseInt(req.params.id, 10);
	var hotel = dataProvider.getHotelById(id);
	if (!hotel) {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Hotel with id='" + id + "' not exisits"
		});
		return;
	}

	var countryName = (req.body.Country || "").trim();
	if (!dataProvider.isCountryExists(countryName)) {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Country '" + countryName + "' not exists"
		});
	}

	var hotelName = (req.body.Name || "").trim();
	var hotelDescription = (req.body.Description || "").trim();
	if (hotelName == '') {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Hotel Name required"
		});
		return;		
	}
	if (hotelDescription == '') {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Hotel Description required"
		});
		return;
	}
	
	var existingHotel = dataProvider.getHotelByName(hotelName, countryName);	
	if (existingHotel && existingHotel.id != id) {
		res.statusCode = 500;
		res.json({
			"status": "error",
			"error": "Hotel '" + hotelName + "' in country '" + countryName + "' already exists"
		});
		return;
	}
	
	dataProvider.updateHotelById(id, {
		"Country": countryName,
		"Name": hotelName,
		"Description": hotelDescription,
	});
	
	res.json({
		"status": "success"
	});
});

app.use('/', router);

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
