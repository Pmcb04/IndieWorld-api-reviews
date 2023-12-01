'use strict';

var utils = require('../utils/writer.js');
var Reviews = require('../service/ReviewsService');

module.exports.createReview = function createReview (req, res, next, body) {
  Reviews.createReview(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteReviewById = function deleteReviewById (req, res, next, id_review) {
  Reviews.deleteReviewById(id_review)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReviewById = function getReviewById (req, res, next, id_review) {
  Reviews.getReviewById(id_review)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReviewsByIdJuego = function getReviewsByIdJuego (req, res, next, id_juego) {
  Reviews.getReviewsByIdJuego(id_juego)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateReviewById = function updateReviewById (req, res, next, body, id_review) {
  Reviews.updateReviewById(body, id_review)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
