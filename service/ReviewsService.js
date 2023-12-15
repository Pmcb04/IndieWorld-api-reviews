'use strict';

/**
 * Módulo que simula operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos de reviews en memoria.
 * Las operaciones incluyen la actualización, creación, eliminación y obtención de reviews.
 * Además, se proporciona una función auxiliar para generar IDs únicos para nuevas reviews.
 */

/**
 * Base de Datos Simulada:
 * Contiene una lista de reviews en memoria para propósitos de demostración.
 * Cada review tiene campos como contenido, ID de usuario, ID de review, valoración, ID de juego y fecha de publicación.
 */
let reviewsDB = [
  {
    contenido: "Contenido 1",
    id_usuario: 6,
    id_review: 1,
    valoracion: 5,
    id_juego: 1,
    fecha_publicacion: "2023-01-01"
  },
  {
    contenido: "Contenido 2",
    id_usuario: 6,
    id_review: 2,
    valoracion: 4,
    id_juego: 2,
    fecha_publicacion: "2023-01-02"
  }
];

/**
 * Actualizar una review por id_review
 *
 * @param {Object} body - Datos de la review a actualizar
 * @param {number} id_review - ID de la review a actualizar
 * @returns {Promise} - Promesa que resuelve con la review actualizada
 */
exports.actualizarReviewPorId = function(body, id_review) {
  return new Promise(function(resolve, reject) {
    // Busca la index de la review en la base de datos simulada.
    const index = reviewsDB.findIndex(review => review.id_review === id_review);

    if (index !== -1) {
      // Actualiza los campos de la review con los datos proporcionados.
      reviewsDB[index] = { ...reviewsDB[index], ...body };
      resolve(reviewsDB[index]);
    } else {
      // Rechaza la promesa si la review no se encuentra.
      reject({ message: 'Review no encontrada' });
    }
  });
};

/**
 * Crear una nueva review
 *
 * @param {Object} body - Datos de la nueva review
 * @returns {Promise} - Promesa que resuelve con la nueva review creada
 */
exports.crearReview = function(body) {
  return new Promise(function(resolve) {
    // Crea un nuevo objeto de review con datos proporcionados y genera un nuevo ID y fecha de publicación.
    const newReview = {
      ...body,
      id_review: generateReviewId(),
      fecha_publicacion: new Date().toISOString() // Fecha actual
    };
    // Agrega la nueva review a la base de datos simulada.
    reviewsDB.push(newReview);
    resolve(newReview);
  });
};

/**
 * Eliminar una review por id_review
 *
 * @param {number} id_review - ID de la review a eliminar
 * @returns {Promise} - Promesa que resuelve después de eliminar la review
 */
exports.eliminarReviewPorId = function(id_review) {
  return new Promise(function(resolve, reject) {
    // Almacena la longitud inicial de la base de datos simulada.
    const initialLength = reviewsDB.length;

    // Filtra las reviews, eliminando aquella con el ID proporcionado.
    reviewsDB = reviewsDB.filter(review => review.id_review !== id_review);
    
    // Resuelve la promesa si la review se eliminó correctamente, de lo contrario, la rechaza.
    if (reviewsDB.length < initialLength) {
      resolve();
    } else {
      reject({ message: 'Review no encontrada' });
    }
  });
};

/**
 * Obtener una review por id_review
 *
 * @param {number} id_review - ID de la review a obtener
 * @returns {Promise} - Promesa que resuelve con la review obtenida
 */
exports.obtenerReviewPorId = function(id_review) {
  return new Promise(function(resolve, reject) {
    // Busca la review en la base de datos simulada por ID.
    const review = reviewsDB.find(review => review.id_review === id_review);

    // Resuelve la promesa con la review si se encuentra, de lo contrario, la rechaza.
    if (review) {
      resolve(review);
    } else {
      reject({ message: 'Review no encontrada' });
    }
  });
};

/**
 * Obtener todas las reviews de un juego
 *
 * @param {number} id_juego - ID del juego del que se obtendrán las reviews
 * @returns {Promise} - Promesa que resuelve con la lista de reviews del juego
 */
exports.obtenerReviewsPorIdJuego = function(id_juego) {
  return new Promise(function(resolve) {
    // Filtra las reviews para obtener aquellas asociadas al juego con el ID proporcionado.
    const juegoReviews = reviewsDB.filter(review => review.id_juego === id_juego);
    resolve(juegoReviews);
  });
};

/**
 * Función auxiliar para generar un ID único para nuevas reviews
 *
 * @returns {number} - Nuevo ID único para la review
 */
function generateReviewId() {
  return Math.max(...reviewsDB.map(review => review.id_review), 0) + 1;
}

const Prometheus = require('prom-client');

/**
 * getMetrics
 * Endpoint to retrieve Prometheus metrics
 * @returns {Promise} Promise object represents the handling of the metrics endpoint
 **/
exports.getMetrics = function() {
  return new Promise(function(resolve, reject) {
    resolve(Prometheus.register.metrics())
  });
};