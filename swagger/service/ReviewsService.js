'use strict';


/**
 * Crear una nueva review
 *
 * body Review 
 * no response value expected for this operation
 **/
exports.createReview = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Eliminar una review por id_review
 *
 * id_review Long ID de la review a consultar, actualizar o eliminar
 * no response value expected for this operation
 **/
exports.deleteReviewById = function(id_review) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obtener una review por id_review
 *
 * id_review Long ID de la review a consultar, actualizar o eliminar
 * returns Review
 **/
exports.getReviewById = function(id_review) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contenido" : "contenido",
  "id_usuario" : 6,
  "id_review" : 0,
  "valoracion" : 5,
  "id_juego" : 1,
  "fecha_publicacion" : "fecha_publicacion"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener todas las reviews de un juego
 *
 * id_juego Long ID del juego del que se van a consultar sus reviews
 * returns List
 **/
exports.getReviewsByIdJuego = function(id_juego) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "contenido" : "contenido",
  "id_usuario" : 6,
  "id_review" : 0,
  "valoracion" : 5,
  "id_juego" : 1,
  "fecha_publicacion" : "fecha_publicacion"
}, {
  "contenido" : "contenido",
  "id_usuario" : 6,
  "id_review" : 0,
  "valoracion" : 5,
  "id_juego" : 1,
  "fecha_publicacion" : "fecha_publicacion"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar una review por id_review
 *
 * body Review 
 * id_review Long ID de la review a consultar, actualizar o eliminar
 * returns Review
 **/
exports.updateReviewById = function(body,id_review) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contenido" : "contenido",
  "id_usuario" : 6,
  "id_review" : 0,
  "valoracion" : 5,
  "id_juego" : 1,
  "fecha_publicacion" : "fecha_publicacion"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

