/**
 * @swagger
 * components:
 *   schemas:
 * 
 *     GenreEnum:
 *       type: string
 *       enum: [Drama, Action, Crime, Adventure, Sci-Fi, Romance, Biography, History, Horror, Mystery, Thriller, Fantasy, Animation, War, Comedy, Musical]
 *       description: Géneros posibles de la película
 * 
 *     Movie:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - year
 *         - director
 *         - duration
 *         - genre
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "dcdd0fad-a94c-4810-8acc-5f108d3b18c3"
 *           description: ID único de la película
 *         title:
 *           type: string
 *           example: "The Shawshank Redemption"
 *           description: Título de la película
 *         year:
 *           type: integer
 *           format: int32
 *           minimum: 1888
 *           maximum: 2100
 *           example: 1994
 *           description: Año de lanzamiento
 *         director:
 *           type: string
 *           example: "Frank Darabont"
 *           description: Director de la película
 *         duration:
 *           type: integer
 *           format: int32
 *           minimum: 1
 *           maximum: 240
 *           example: 142
 *           description: Duración en minutos
 *         poster:
 *           type: string
 *           format: uri
 *           example: "https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp"
 *           description: URL del póster de la película
 *         genre:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/GenreEnum'
 *           example: ["Drama"]
 *           description: Géneros de la película
 *         rate:
 *           type: number
 *           format: float
 *           minimum: 0
 *           maximum: 10
 *           example: 9.3
 *           description: Calificación de la película (0-10)
 *         synopsis:
 *           type: string
 *           nullable: true
 *           example: "Two imprisoned men bond over a number of years..."
 *           description: Sinopsis de la película (opcional)
 * 
 *     MovieListResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Movie'
 *       example:
 *         - id: "dcdd0fad-a94c-4810-8acc-5f108d3b18c3"
 *           title: "The Shawshank Redemption"
 *           year: 1994
 *           director: "Frank Darabont"
 *           duration: 142
 *           poster: "https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp"
 *           genre: ["Drama"]
 *           rate: 9.3
 *         - id: "c8a7d63f-3b04-44d3-9d95-8782fd7dcfaf"
 *           title: "The Dark Knight"
 *           year: 2008
 *           director: "Christopher Nolan"
 *           duration: 152
 *           poster: "https://i.ebayimg.com/images/g/yokAAOSw8w1YARbm/s-l1200.jpg"
 *           genre: ["Action", "Crime", "Drama"]
 *           rate: 9
 * 
 *     PaginatedMovies:
 *       type: object
 *       properties:
 *         total:
 *           type: integer
 *           example: 42
 *           description: Total de películas disponibles
 *         limit:
 *           type: integer
 *           example: 10
 *           description: Límite de resultados por página
 *         offset:
 *           type: integer
 *           example: 0
 *           description: Desplazamiento para paginación
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Movie'
 * 
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           example: "Movie not found"
 *         details:
 *           type: string
 *           example: "No movie found with id dcdd0fad-a94c-4810-8acc-5f108d3b18c3"
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: "2023-08-15T12:00:00Z"
 */