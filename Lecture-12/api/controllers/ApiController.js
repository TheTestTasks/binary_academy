/**
 * ApiController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAllCountries: function(req, res) {
        Country.find().exec(function(err, countries){
            return res.send(countries);
        });
    },
    addCountry: function(req, res) {
        var obj = {
            Name: req.body.Name
        };
        Country.create(obj).exec(function(err, country){
            return res.send(country);
        });
    },
    getCountryHotels: function(req, res) {
        Hotel.find({where: {Country: req.param('country')}}).exec(function(err, hotels){
            return res.send(hotels);
        });
    },
    getHotel: function(req, res) {
        Hotel.findOne({where: {id: req.param('id')}}).exec(function(err, hotel){
            return res.send(hotel);
        });
    },
    addHotel: function(req, res) {
        var obj = {
            Country: req.param('country'),
            Name: req.body.Name, 
            Description: req.body.Description
        };
        Hotel.create(obj).exec(function(err, hotel){
            return res.send(hotel);
        });
    },
    updateHotel: function(req, res) {
        Hotel.findOne({where: {id: req.param('id')}}).exec(function(err, hotel){
            hotel.Country = req.body.Country;
            hotel.Name = req.body.Name;
            hotel.Description = req.body.Description;
            hotel.save(function(err) {
                return res.send(hotel);
            });            
        });        
    },
    deleteHotel: function(req, res) {
        Hotel.destroy({id: req.param('id')}).exec(function(err, hotels) {
           return res.send("Success");
        });        
    },
};

