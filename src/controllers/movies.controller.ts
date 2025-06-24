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
        const movieDto: MovieDto = req.body;
        res.json(this.moviesService.add(movieDto));
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

    getByParams = (req: Request, res: Response) => {//localhost:3000/movies/terminator?id=1234
        const titulo = req.params.titulo;
        res.json({message: "devuelvo todas las peliculas"})
    }

    getByQuery = (req: Request, res: Response) => {//localhost:3000/movies/terminator/1234
        const director = req.query.director;
        res.json({message: "devuelvo todas las peliculas"})
    }

    postByBody = (req: Request, res: Response) => {
        const genero = req.body.genero;
        res.json({message: "devuelvo todas las peliculas"})
    }
}

