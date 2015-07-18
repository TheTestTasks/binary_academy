/**
 * ErrorController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    plainError: function(req, res) {
        res.badRequest('Error');
    },

	viewError: function(req, res) {
        res.view('error');
    },
};

