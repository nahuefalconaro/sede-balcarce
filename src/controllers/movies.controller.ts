import {Request, Response} from 'express';
import { MoviesService } from '../services/movies.service';

export class MoviesController {

    constructor(private moviesService = new MoviesService()) { 
    }   

    //localhost:3000/movies
    get = (req: Request, res: Response) => {
        res.send(this.moviesService.get());
    }

    post = (req: Request, res: Response) => {
        res.json({message: "devuelvo todas las peliculas"})
    }

    put = (req: Request, res: Response) => {
        res.json({message: "devuelvo todas las peliculas"})
    }

    delete = (req: Request, res: Response) => {
        res.json({message: "devuelvo todas las peliculas"})
    }

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

