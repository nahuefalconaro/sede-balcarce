class Movie {

    id: string;
    title: string;
    year: number;
    director: string;
    duration: number;
    poster: string;
    genre: string[];
    rate: number;

    constructor(id: string, title: string, year: number, director: string, duration: number, poster: string, genre: string[], rate: number) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.poster = poster;
        this.genre = genre;
        this.rate = rate;
    }
}

