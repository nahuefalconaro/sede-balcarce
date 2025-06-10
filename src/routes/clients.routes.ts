import { Router } from "express";
import { ClientController} from "../controllers/clients.controller";

export const router = Router();

const clientController = new ClientController();



// router.<verbo[get,post,put,delete]>("<ruta>", controller.<metodo>);
router.get("/getTodos", clientController.getTodos);//localhost:3000/clients/mm
router.get("/getPorAnio", clientController.getPorAnio);
router.get("/:id", clientController.getById);//localhost:3000/clients/1
router.post("/", clientController.create);
router.put("/:id", clientController.update);
router.delete("/:id", clientController.delete);

