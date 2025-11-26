import { Router } from "express";
import diagramController from "../controllers/diagramController.js";
import { handleTokenGeneration } from "../controllers/diagramController.js";
import verifyLinkAcess from "../middlewares/authMiddlewares.js";
import { verify } from "crypto";


const diagramRoutes = Router();

diagramRoutes.post("/generate-token/:id", handleTokenGeneration);

diagramRoutes.post("/create-diagram", diagramController.createDiagram);

diagramRoutes.get("/:id", diagramController.getDiagramById);

diagramRoutes.delete("/delete-diagram/:id", diagramController.deleteDiagram);

diagramRoutes.put("/save-diagram/:id",  diagramController.updateDiagram);

diagramRoutes.get

export default diagramRoutes;