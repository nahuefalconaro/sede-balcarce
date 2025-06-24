class MovieDto {
    
    title: string;
    year: number;
    director: string;
    duration: number;
    poster: string;
    genre: string[];
    rate: number;

    constructor(title: string, year: number, director: string, duration: number, poster: string, genre: string[], rate: number) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.poster = poster;
        this.genre = genre;
        this.rate = rate;
    }
}