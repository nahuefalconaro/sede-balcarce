
import * as fs from 'fs';
import * as path from 'path';

const dataPath = path.join(__dirname, '../repositories/movies.json');

export class MoviesRepository {
    private movies: Movie[];

    constructor() {
        this.movies = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    }

    public getAll(): Movie[] {
        return this.movies;
    }

    public getById(id: string): Movie | undefined {
        return this.movies.find(movie => movie.id === id);
    }

    public add(movie: Movie): void {
        this.movies.push(movie);
        fs.writeFileSync(dataPath, JSON.stringify(this.movies, null, 2), 'utf8');
    }
}
