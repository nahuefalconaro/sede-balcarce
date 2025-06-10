// - Todos los verbos /get /post /put /delete - OK
// - Recurso por ID (route param) /get/:id  /get/terror -- OK
// - Recurso por titulo, o autor, o estrenos o lo que sea (query params) /get?title=The Truman Show OK


import { Router } from "express";
import { MoviesController} from "../controllers/movies.controller";

export const router = Router();

const moviesController = new MoviesController();

router.get("/", moviesController.get)//localhost:3000/movies, traer todas las peliculas
router.post("/", moviesController.post)//localhost:3000/movies, agregar nueva pelicula
router.put("/:id", moviesController.put)//localhost:3000/movies/dcdd0fad-a94c-4810-8acc-5f108d3b18c3
router.delete("/:id", moviesController.delete)//localhost:3000/movies/dcdd0fad-a94c-4810-8acc-5f108d3b18c3
router.get("/:id", moviesController.getById)//localhost:3000/movies/dcdd0fad-a94c-4810-8acc-5f108d3b18c3
router.get("/:titulo", moviesController.getByParams)
router.get("/", moviesController.getByQuery)//lo pasamos por query param
router.post("/", moviesController.getByBody)//traemos por post