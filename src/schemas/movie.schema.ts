/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID único de la película
 *         title:
 *           type: string
 *           description: Título de la película
 *         year:
 *           type: number
 *           description: Año de lanzamiento
 *         director:
 *           type: string
 *           description: Director de la película
 *         duration:
 *           type: number
 *           description: Duración en minutos
 *         poster:
 *           type: string
 *           description: URL del póster
 *         genre:
 *           type: array
 *           items:
 *             type: string
 *           description: Géneros de la película
 *         rate:
 *           type: number
 *           description: Calificación de la película
 *       required:
 *         - title
 *         - year
 *         - director
 */