'use strict';

var utils = require('../utils/writer.js');
var Reviews = require('../service/ReviewsService');

module.exports.actualizarReviewPorId = function actualizarReviewPorId (req, res, next, body, id_review) {
  Reviews.actualizarReviewPorId(body, id_review)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function(error) {
      if (error.status === 404) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.crearReview = function crearReview (req, res, next, body) {
  Reviews.crearReview(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function(error) {
      if (error.status === 404) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eliminarReviewPorId = function eliminarReviewPorId (req, res, next, id_review) {
  Reviews.eliminarReviewPorId(id_review)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function(error) {
      if (error.status === 404) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtenerReviewPorId = function obtenerReviewPorId (req, res, next, id_review) {
  Reviews.obtenerReviewPorId(id_review)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function(error) {
      if (error.status === 404) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtenerReviewsPorIdJuego = function obtenerReviewsPorIdJuego (req, res, next, id_juego) {
  Reviews.obtenerReviewsPorIdJuego(id_juego)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function(error) {
      if (error.status === 404) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
