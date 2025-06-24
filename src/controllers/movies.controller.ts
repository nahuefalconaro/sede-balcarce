import {Request, Response} from 'express';
import { MoviesService } from '../services/movies.service';

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Endpoints para gestión de películas
 */
export class MoviesController {

    constructor(private moviesService = new MoviesService()) { 
    }   

    /**
     * @swagger
     * /movies:
     *   get:
     *     summary: Obtiene todas las películas
     *     tags: [Movies]
     *     responses:
     *       200:
     *         description: Lista de películas
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/MovieListResponse'
     */
    get = (req: Request, res: Response) => {
        res.send(this.moviesService.get());
    }

    /**
     * @swagger
     * /movies:
     *   post:
     *     summary: Crea una nueva película
     *     tags: [Movies]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Movie'
     *     responses:
     *       201:
     *         description: Película creada exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Movie'
     *       400:
     *         description: Error en los datos enviados
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/ErrorResponse'
     */
    post = (req: Request, res: Response) => {
        res.json({message: "devuelvo todas las peliculas"})
    }

    /**
     * @swagger
     * /movies/{id}:
     *   put:
     *     summary: Actualiza una película por ID
     *     tags: [Movies]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID de la película
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Movie'
     *     responses:
     *       200:
     *         description: Película actualizada
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Movie'
     *       404:
     *         description: Película no encontrada
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/ErrorResponse'
     */
    put = (req: Request, res: Response) => {
        res.json({message: "devuelvo todas las peliculas"})
    }

    /**
     * @swagger
     * /movies/{id}:
     *   delete:
     *     summary: Elimina una película por ID
     *     tags: [Movies]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID de la película
     *     responses:
     *       204:
     *         description: Película eliminada exitosamente
     *       404:
     *         description: Película no encontrada
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/ErrorResponse'
     */
    delete = (req: Request, res: Response) => {
        res.json({message: "devuelvo todas las peliculas"})
    }

    /**
     * @swagger
     * /movies/{id}:
     *   get:
     *     summary: Obtiene una película por ID
     *     tags: [Movies]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID de la película
     *     responses:
     *       200:
     *         description: Película encontrada
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Movie'
     *       404:
     *         description: Película no encontrada
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/ErrorResponse'
     */
    getById = (req: Request, res: Response) => {
        res.json({message: "devuelvo todas las peliculas"})
    }


    getByParams = (req: Request, res: Response) => {
        const titulo = req.params.titulo;
        res.json({message: "devuelvo todas las peliculas"})
    }

    getByQuery = (req: Request, res: Response) => {
        const director = req.query.director;
        res.json({message: "devuelvo todas las peliculas"})
    }

    getByBody = (req: Request, res: Response) => {
        const genero = req.body.genero;
        res.json({message: "devuelvo todas las peliculas"})
    }
}

