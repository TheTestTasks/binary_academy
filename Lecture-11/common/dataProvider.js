// data provider
(function(){    
    var countries = [
        "Ukraine",
        "Russia",
        "China",
        "India"
    ];

    var hotels = [
        {
            "id": 1,
            "Country": "Ukraine",
            "Name": "Kiev Inn",
            "Description": "3-star hotel, Address: Mykhailivs'ka St, 9, Kyiv"
        },
        {
            "id": 2,
            "Country": "Ukraine",
            "Name": "Hotel Ukraine",
            "Description": "3-star hotel, Address: 4 Institutskaya Street, Kyiv"
        },
        {
            "id": 3,
            "Country": "Russia",
            "Name": "Renaissance St. Petersburg Baltic Hotel",
            "Description": "5-star hotel, Address: Pochtamtskaya Str. 4, St. Petersburg, Russia, 190000"
        },
        {
            "id": 4,
            "Country": "China",
            "Name": "Holiday Inn Downtown Beijing",
            "Description": "4-star hotel, Address: 98 Beilishi Rd, Xicheng, Beijing, China"
        },
        {
            "id": 5,
            "Country": "India",
            "Name": "Hotel India",
            "Description": "3-star hotel, Address: No.59,Patel Nagar, Cantt,Bhagwanpur, Varanasi, Uttar Pradesh 221002, India"
        },
    ];

    exports.getAllCountries = function() {
        return countries;
    };

    exports.isCountryExists = function(name) {
        return countries.indexOf(name) != -1;
    };

    exports.addCountry = function(name) {
        countries.push(name);
    };

    exports.getHotelsByCountry = function(countryName) {
        var filteredHotels = [];
        for (h in hotels) {
            if (hotels[h].Country == countryName) filteredHotels.push(hotels[h]);
        }
        return filteredHotels;
    };

    exports.getHotelById = function(id) {
        for (h in hotels) {
            if (hotels[h].id == id) return hotels[h];                
        }
        return null;
    };

    exports.getHotelByName = function(hotelName, countryName) {
        for (h in hotels) {
            if (hotels[h].Name == hotelName && hotels[h].Country == countryName) return hotels[h];
        }
        return null;
    };

    exports.addHotel = function(hotel) {
        hotel.id = hotels.length + 1;
        hotels.push(hotel);
    };

    exports.updateHotelById = function(id, hotel) {
        for (h in hotels) {
            if (hotels[h].id == id) {
                hotels[h].Country = hotel.Country;
                hotels[h].Name = hotel.Name;
                hotels[h].Description = hotel.Description;
                break;
            }
        }
    };

    exports.deleteHotelById = function(id) {
        for (h in hotels) {
            if (hotels[h].id == id) {
                hotels.splice(h, 1);
                break;
            }
        }        
    };

})();