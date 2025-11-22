import { Router } from "express";
import diagramController from "../controllers/diagramController.js";
import { handleTokenGeneration } from "../controllers/diagramController.js";
import verifyLinkAcess from "../middlewares/authMiddlewares.js";



const diagramRoutes = Router();

diagramRoutes.post("/generate-token/:id", handleTokenGeneration);

diagramRoutes.post("/create-diagram", diagramController.createDiagram);

diagramRoutes.get("/:id", verifyLinkAcess, diagramController.getDiagramById);

diagramRoutes.delete("/delete-diagram/:id", verifyLinkAcess, diagramController.deleteDiagram);

diagramRoutes.put("/save-diagram/:id", verifyLinkAcess, diagramController.updateDiagram);

diagramRoutes.post("/post-diagram/:id", verifyLinkAcess, diagramController.postDiagramData);

export default diagramRoutes;