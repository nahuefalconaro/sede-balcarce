import * as fs from 'fs';
import * as path from 'path';


const dataPath = path.join(__dirname, '../repositories/movies.json');
export class MoviesService{

    get(){
        const data = fs.readFileSync(dataPath, 'utf-8');
        return JSON.parse(data);
    }
}