import { Request, Response } from 'express';

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: API para gestionar clientes
 */
export class ClientController {


    contrustor() {
    }
    /**
     * @swagger
     * /clients/:
     *   get:
    *      summary: Obtiene un mensaje de bienvenida
    *      tags: [Clientes]
    *      responses:
    *        200:
    *          description: Lista de clientes
    *          content:
    *            application/json:
    *             schema:
    *               properties: 
    *                 id: 
    *                   type: "string"
    *                 first_name:                    
    *                           type: "string"
    *   
    * 
     */
    get = (req: Request, res: Response) => {
        res.send("Bienvenido a la sección Clientes");
    }

    /**
     * @swagger
     * /clients/todos:
     *   get:
     *     summary: Obtiene un mensaje de bienvenida y datos de ejemplo
     *     tags: [Clientes]
     *     responses:
     *       200:
     *         description: Mensaje y datos de ejemplo
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Mati dice: Hola armamos un fernet?"
     *                 id:
     *                   type: string
     *                   example: "asxdfasdfa"
     *                 name:
     *                   type: string
     *                   example: "Jorgen"
     */
    getTodos = (req: Request, res: Response) => {//localhost:3000/clients
        res.json({ 
            message: "Mati dice: Hola armamos un fernet?", 
            id: "asxdfasdfa", 
            name: "Jorgen" })
    }

    /**
     * @swagger
     * /clients/getPorAnio:
     *   get:
     *     summary: Obtiene un mensaje de bienvenida y datos de ejemplo
     *     tags: [Clientes]
     */
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
        res.json({ message: "Hola desde el controller" })
    }

    create = (req: Request, res: Response) => {//localhost:3000/clients
        const body = req.body;
        console.log(body);
        res.status(200).json(body);
    }

    delete = (req: Request, res: Response) => {//localhost:3000/clients/1
        res.json({ message: "Hola desde el controller" })
    }


}