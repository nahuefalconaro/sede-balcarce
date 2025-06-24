import express  from "express";
import cors from "cors";
import { router } from "./routes/clients.routes";
import { router as routerMovies } from "./routes/movies.route";
import expressListEndpoints from "express-list-endpoints";
import swaggerUi from 'swagger-ui-express';
import { specs } from '../swagger.config';

const app = express();
app.use(express.json());
app.use(cors());


//localhost:3000/clients
// app.use("/clients", router)
//localhost:3000/movies/
app.use("/movies", routerMovies)


// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const endpoints = expressListEndpoints(routerMovies);//nos muestra por consola los endpoints declarados

app.listen(3000, () => {
    console.log(endpoints);
    console.log("Server running on port http.//localhost:3000");
});
