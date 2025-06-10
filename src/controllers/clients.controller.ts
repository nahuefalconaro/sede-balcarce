import {Request, Response} from 'express';


export class ClientController{
    

    contrustor(){
    }


    getTodos = (req: Request, res: Response) => {//localhost:3000/clients
        res.json({message: "Mati dice: Hola armamos un fernet?"})
    }

    getPorAnio = (req: Request, res: Response) => {//localhost:3000/clients?anio=
            const query = req.query.anio;
            console.log(query);
            res.status(200).json(query);
    }

    getById = (req: Request, res: Response) => {//localhost:3000/clients/1
            const params = req.params.id;
            console.log(params);
            res.status(200).json(params);
    }

    update = (req: Request, res: Response) => {//localhost:3000/clients
        res.json({message: "Hola desde el controller"})
    }

    create = (req: Request, res: Response) => {//localhost:3000/clients
            const body = req.body;
            console.log(body);
            res.status(200).json(body);
    }

    delete = (req: Request, res: Response) => {//localhost:3000/clients/1
        res.json({message: "Hola desde el controller"})
    }

    
}