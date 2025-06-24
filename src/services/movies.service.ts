import { MoviesRepository } from "../repositories/movies.repository";



export class MoviesService{
    constructor(private moviesRepository = new MoviesRepository()) { 
    }

    get = () => this.moviesRepository.getAll();

    getById = (id: string) => this.moviesRepository.getById(id);

    add = (movieDto: MovieDto) => {
        const movie: Movie = new Movie(
            Math.random().toString(36).substring(2, 15), // Generating a random ID
            movieDto.title,
            movieDto.year,
            movieDto.director,
            movieDto.duration,
            movieDto.poster,
            movieDto.genre,
            movieDto.rate
        );

        this.moviesRepository.add(movie);
        return movie;
    };
    
}